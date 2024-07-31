import { getRefId } from './docref';
export var EAttachmentType;
(function (EAttachmentType) {
    EAttachmentType["FILE"] = "FILE";
    EAttachmentType["DIRECTORY"] = "DIRECTORY";
})(EAttachmentType || (EAttachmentType = {}));
export var EAttachmentFileType;
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
})(EAttachmentFileType || (EAttachmentFileType = {}));
export var EAttachmentSystemType;
(function (EAttachmentSystemType) {
    EAttachmentSystemType["USER_ROOT_DIRECTORY"] = "USER_ROOT_DIRECTORY";
    EAttachmentSystemType["USER_UPLOADS_DIRECTORY"] = "USER_UPLOADS_DIRECTORY";
    EAttachmentSystemType["USER_SHARED_DIRECTORY"] = "USER_SHARED_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_DIRECTORY"] = "USER_PORTFOLIO_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_ASSETS_DIRECTORY"] = "USER_PORTFOLIO_ASSETS_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_LIABILITIES_DIRECTORY"] = "USER_PORTFOLIO_LIABILITIES_DIRECTORY";
    EAttachmentSystemType["USER_INVESTMENT_DIRECTORY"] = "USER_INVESTMENT_DIRECTORY";
    EAttachmentSystemType["IR_ASSET_DIRECTORY"] = "IR_ASSET_DIRECTORY";
})(EAttachmentSystemType || (EAttachmentSystemType = {}));
export var EAttachmentPermission;
(function (EAttachmentPermission) {
    EAttachmentPermission["READ"] = "READ";
    EAttachmentPermission["WRITE"] = "WRITE";
    EAttachmentPermission["READ_WRITE"] = "READ_WRITE";
})(EAttachmentPermission || (EAttachmentPermission = {}));
export const isAttachment = (x) => {
    if (!x)
        return false;
    if (typeof x !== 'object')
        return false;
    return !!x.type && !!x.fileType && !!x.name;
};
export const isSavedAttachment = (x) => {
    if (!isAttachment(x))
        return false;
    return !!x._id;
};
const toStr = (x) => {
    if (typeof x === 'string')
        return x;
    if (typeof x === 'object' && x.toString && typeof x.toString === 'function')
        return x.toString();
    return x + '';
};
export const userIsOwnerOfAttachment = (user, attachment) => {
    if (!attachment.user)
        return false;
    const idA = toStr(getRefId(user));
    const idB = toStr(getRefId(attachment.user));
    return idA === idB;
};
export const getUserAttachmentPermissions = (user, attachment) => {
    if (attachment.user && getRefId(user) === getRefId(attachment.user))
        return [EAttachmentPermission.READ_WRITE];
    if (!attachment.permissions)
        return [];
    if (attachment.permissions.length <= 0)
        return [];
    const permission = attachment.permissions.find((it) => getRefId(it.user) === getRefId(user));
    if (!permission)
        return [];
    if (!permission.flags)
        return [];
    if (permission.flags.length <= 0)
        return [];
    return permission.flags;
};
export const userCanModifyAttachment = (user, attachment) => {
    const perms = getUserAttachmentPermissions(user, attachment);
    if (perms.length <= 0)
        return false;
    return perms.includes(EAttachmentPermission.READ_WRITE) || perms.includes(EAttachmentPermission.WRITE);
};
export const userCanReadAttachment = (user, attachment) => {
    const perms = getUserAttachmentPermissions(user, attachment);
    if (perms.length <= 0)
        return false;
    return perms.includes(EAttachmentPermission.READ_WRITE) || perms.includes(EAttachmentPermission.READ);
};
export const userCanDeleteAttachment = (user, attachment) => {
    if (!userCanModifyAttachment(user, attachment))
        return false;
    return attachment.canBeDeleted !== false;
};
