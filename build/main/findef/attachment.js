"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSavedAttachment = exports.isAttachment = exports.EAttachmentPermission = exports.EAttachmentSystemType = exports.EAttachmentFileType = exports.EAttachmentType = void 0;
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
    EAttachmentSystemType["USER_SHARED_DIRECTORY"] = "USER_SHARED_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_DIRECTORY"] = "USER_PORTFOLIO_DIRECTORY";
})(EAttachmentSystemType || (exports.EAttachmentSystemType = EAttachmentSystemType = {}));
var EAttachmentPermission;
(function (EAttachmentPermission) {
    EAttachmentPermission["READ"] = "READ";
    EAttachmentPermission["WRITE"] = "WRITE";
})(EAttachmentPermission || (exports.EAttachmentPermission = EAttachmentPermission = {}));
const isAttachment = (x) => {
    if (!x)
        return false;
    if (typeof x !== 'object')
        return false;
    return (!!x.type && !!x.fileType && !!x.name);
};
exports.isAttachment = isAttachment;
const isSavedAttachment = (x) => {
    if (!(0, exports.isAttachment)(x))
        return false;
    return !!x._id;
};
exports.isSavedAttachment = isSavedAttachment;
