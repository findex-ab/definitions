import { EAssetSource } from './asset';
import { getRefId } from './docref';
import { isUser } from './user';
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
    EAttachmentFileType["PDF"] = "PDF";
    EAttachmentFileType["SPREADSHEET"] = "SPREADSHEET";
    EAttachmentFileType["DIRECTORY"] = "DIRECTORY";
    EAttachmentFileType["ARCHIVE_ZIP"] = "ARCHIVE_ZIP";
    EAttachmentFileType["ARCHIVE_TAR_GZ"] = "ARCHIVE_TAR_GZ";
    EAttachmentFileType["ARCHIVE_TAR"] = "ARCHIVE_TAR";
    EAttachmentFileType["ARCHIVE_RAR"] = "ARCHIVE_RAR";
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
    EAttachmentSystemType["USER_LIABILITY_DIRECTORY"] = "USER_LIABILITY_DIRECTORY";
    EAttachmentSystemType["IR_ASSET_DIRECTORY"] = "IR_ASSET_DIRECTORY";
    EAttachmentSystemType["ASSET_DIRECTORY"] = "ASSET_DIRECTORY";
    EAttachmentSystemType["LIABILITY_DIRECTORY"] = "LIABILITY_DIRECTORY";
    EAttachmentSystemType["ASSET_DIRECTORY_PUBLIC"] = "ASSET_DIRECTORY_PUBLIC";
    EAttachmentSystemType["ASSET_DIRECTORY_USER_PRIVATE"] = "ASSET_DIRECTORY_USER_PRIVATE";
    EAttachmentSystemType["LOGO"] = "LOGO";
    EAttachmentSystemType["ARBITRARY"] = "ARBITRARY";
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
export const getAttachmentParentId = (attachment, symbolic = false) => {
    const symbolicParents = attachment.symbolicParents;
    const parent = attachment.parent;
    if (symbolic) {
        if (!symbolicParents || symbolicParents.length <= 0)
            return null;
        return getRefId(symbolicParents[0]) || null;
    }
    if (!parent)
        return null;
    return getRefId(parent) || null;
};
export const getAttachmentOwner = (attachment) => {
    if (isUser(attachment.user))
        return attachment.user;
    if (attachment.permissions && attachment.permissions.length > 0) {
        let perm = attachment.permissions.find((it) => it.flags.includes(EAttachmentPermission.READ_WRITE));
        if (perm && isUser(perm.user))
            return perm.user;
        perm = attachment.permissions.find((it) => it.flags.includes(EAttachmentPermission.WRITE));
        if (perm && isUser(perm.user))
            return perm.user;
    }
    return null;
};
export const userIsOwnerOfAttachment = (user, attachment) => {
    if (attachment.user && getRefId(attachment.user) === getRefId(user))
        return true;
    const owner = getAttachmentOwner(attachment);
    if (!owner)
        return false;
    const idA = toStr(getRefId(user));
    const idB = toStr(getRefId(owner));
    return idA === idB;
};
export const getUserAttachmentPermissions = (user, attachment) => {
    const perms = (() => {
        if (isUser(user) && attachment.asset) {
            const assetId = getRefId(attachment.asset);
            const administratedIds = (user.administratedAssets || []).map((it) => getRefId(it));
            if (administratedIds.includes(assetId)) {
                return [
                    EAttachmentPermission.READ_WRITE,
                    EAttachmentPermission.READ,
                    EAttachmentPermission.WRITE,
                ];
            }
        }
        if (userIsOwnerOfAttachment(user, attachment)) {
            return [
                EAttachmentPermission.READ_WRITE,
                EAttachmentPermission.READ,
                EAttachmentPermission.WRITE,
            ];
        }
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
    })();
    if (attachment.systemType === EAttachmentSystemType.ASSET_DIRECTORY_PUBLIC) {
        if (!perms.includes(EAttachmentPermission.READ)) {
            perms.push(EAttachmentPermission.READ);
        }
    }
    if (perms.length <= 0 && attachment.public) {
        perms.push(EAttachmentPermission.READ);
    }
    //if (perms.length <= 0) {
    //  if (attachment.systemType === EAttachmentSystemType.ASSET_DIRECTORY && Array.isArray(attachment.children) && attachment.children.length > 0) {
    //    const child = attachment.children.find((it) => {
    //      if (it === null || typeof it !== 'object') return false;
    //      const attach = it as ISavedDocument<IAttachment>;
    //      return attach.user && getRefId(attach.user).toString() === getRefId(user).toString();
    //    });
    //    if (child) {}
    //  }
    //}
    return perms;
};
export const userCanModifyAttachment = (user, attachment) => {
    const perms = getUserAttachmentPermissions(user, attachment);
    if (perms.length <= 0)
        return false;
    return (perms.includes(EAttachmentPermission.READ_WRITE) ||
        perms.includes(EAttachmentPermission.WRITE));
};
export const userCanReadAttachment = (user, attachment) => {
    const perms = getUserAttachmentPermissions(user, attachment);
    if (perms.length <= 0)
        return false;
    return (perms.includes(EAttachmentPermission.READ_WRITE) ||
        perms.includes(EAttachmentPermission.READ));
};
export const userCanDeleteAttachment = (user, attachment) => {
    if (!userCanModifyAttachment(user, attachment))
        return false;
    return attachment.canBeDeleted !== false;
};
export const attachmentIsOwnedByCompany = (attachment) => {
    const asset = attachment.asset;
    if (asset && typeof asset === 'object') {
        const assetObj = asset;
        if (assetObj.source === EAssetSource.IR)
            return true;
        return false;
    }
    else if (asset) {
        // our best guess
        return true;
    }
    return false;
};
