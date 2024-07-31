"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCanDeleteAttachment = exports.userCanReadAttachment = exports.userCanModifyAttachment = exports.getUserAttachmentPermissions = exports.userIsOwnerOfAttachment = exports.isSavedAttachment = exports.isAttachment = exports.EAttachmentPermission = exports.EAttachmentSystemType = exports.EAttachmentFileType = exports.EAttachmentType = void 0;
const docref_1 = require("./docref");
var EAttachmentType;
(function (EAttachmentType) {
    EAttachmentType["FILE"] = "FILE";
    EAttachmentType["DIRECTORY"] = "DIRECTORY";
})(EAttachmentType || (exports.EAttachmentType = EAttachmentType = {}));
var EAttachmentFileType;
(function (EAttachmentFileType) {
    EAttachmentFileType["UNKNOWN"] = "UNKNOWN";
    EAttachmentFileType["BINARY"] = "BINARY";
    EAttachmentFileType["IMAGE"] = "IMAGE";
    EAttachmentFileType["VIDEO"] = "VIDEO";
    EAttachmentFileType["AUDIO"] = "AUDIO";
    EAttachmentFileType["CODE"] = "CODE";
    EAttachmentFileType["TEXT"] = "TEXT";
    EAttachmentFileType["DOCUMENT"] = "DOCUMENT";
    EAttachmentFileType["SPREADSHEET"] = "SPREADSHEET";
    EAttachmentFileType["DIRECTORY"] = "DIRECTORY";
})(EAttachmentFileType || (exports.EAttachmentFileType = EAttachmentFileType = {}));
var EAttachmentSystemType;
(function (EAttachmentSystemType) {
    EAttachmentSystemType["USER_ROOT_DIRECTORY"] = "USER_ROOT_DIRECTORY";
    EAttachmentSystemType["USER_UPLOADS_DIRECTORY"] = "USER_UPLOADS_DIRECTORY";
    EAttachmentSystemType["USER_SHARED_DIRECTORY"] = "USER_SHARED_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_DIRECTORY"] = "USER_PORTFOLIO_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_ASSETS_DIRECTORY"] = "USER_PORTFOLIO_ASSETS_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_LIABILITIES_DIRECTORY"] = "USER_PORTFOLIO_LIABILITIES_DIRECTORY";
    EAttachmentSystemType["USER_INVESTMENT_DIRECTORY"] = "USER_INVESTMENT_DIRECTORY";
    EAttachmentSystemType["IR_ASSET_DIRECTORY"] = "IR_ASSET_DIRECTORY";
})(EAttachmentSystemType || (exports.EAttachmentSystemType = EAttachmentSystemType = {}));
var EAttachmentPermission;
(function (EAttachmentPermission) {
    EAttachmentPermission["READ"] = "READ";
    EAttachmentPermission["WRITE"] = "WRITE";
    EAttachmentPermission["READ_WRITE"] = "READ_WRITE";
})(EAttachmentPermission || (exports.EAttachmentPermission = EAttachmentPermission = {}));
const isAttachment = (x) => {
    if (!x)
        return false;
    if (typeof x !== 'object')
        return false;
    return !!x.type && !!x.fileType && !!x.name;
};
exports.isAttachment = isAttachment;
const isSavedAttachment = (x) => {
    if (!(0, exports.isAttachment)(x))
        return false;
    return !!x._id;
};
exports.isSavedAttachment = isSavedAttachment;
const toStr = (x) => {
    if (typeof x === 'string')
        return x;
    if (typeof x === 'object' && x.toString && typeof x.toString === 'function')
        return x.toString();
    return x + '';
};
const userIsOwnerOfAttachment = (user, attachment) => {
    if (!attachment.user)
        return false;
    const idA = toStr((0, docref_1.getRefId)(user));
    const idB = toStr((0, docref_1.getRefId)(attachment.user));
    return idA === idB;
};
exports.userIsOwnerOfAttachment = userIsOwnerOfAttachment;
const getUserAttachmentPermissions = (user, attachment) => {
    if (attachment.user && (0, docref_1.getRefId)(user) === (0, docref_1.getRefId)(attachment.user))
        return [EAttachmentPermission.READ_WRITE];
    if (!attachment.permissions)
        return [];
    if (attachment.permissions.length <= 0)
        return [];
    const permission = attachment.permissions.find((it) => (0, docref_1.getRefId)(it.user) === (0, docref_1.getRefId)(user));
    if (!permission)
        return [];
    if (!permission.flags)
        return [];
    if (permission.flags.length <= 0)
        return [];
    return permission.flags;
};
exports.getUserAttachmentPermissions = getUserAttachmentPermissions;
const userCanModifyAttachment = (user, attachment) => {
    const perms = (0, exports.getUserAttachmentPermissions)(user, attachment);
    if (perms.length <= 0)
        return false;
    return perms.includes(EAttachmentPermission.READ_WRITE) || perms.includes(EAttachmentPermission.WRITE);
};
exports.userCanModifyAttachment = userCanModifyAttachment;
const userCanReadAttachment = (user, attachment) => {
    const perms = (0, exports.getUserAttachmentPermissions)(user, attachment);
    if (perms.length <= 0)
        return false;
    return perms.includes(EAttachmentPermission.READ_WRITE) || perms.includes(EAttachmentPermission.READ);
};
exports.userCanReadAttachment = userCanReadAttachment;
const userCanDeleteAttachment = (user, attachment) => {
    if (!(0, exports.userCanModifyAttachment)(user, attachment))
        return false;
    return attachment.canBeDeleted !== false;
};
exports.userCanDeleteAttachment = userCanDeleteAttachment;
