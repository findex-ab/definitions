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
    EAttachmentSystemType["USER_SHARED_DIRECTORY"] = "USER_SHARED_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_DIRECTORY"] = "USER_PORTFOLIO_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_ASSETS_DIRECTORY"] = "USER_PORTFOLIO_ASSETS_DIRECTORY";
    EAttachmentSystemType["USER_PORTFOLIO_LIABILITIES_DIRECTORY"] = "USER_PORTFOLIO_LIABILITIES_DIRECTORY";
})(EAttachmentSystemType || (EAttachmentSystemType = {}));
export var EAttachmentPermission;
(function (EAttachmentPermission) {
    EAttachmentPermission["READ"] = "READ";
    EAttachmentPermission["WRITE"] = "WRITE";
})(EAttachmentPermission || (EAttachmentPermission = {}));
export const isAttachment = (x) => {
    if (!x)
        return false;
    if (typeof x !== 'object')
        return false;
    return (!!x.type && !!x.fileType && !!x.name);
};
export const isSavedAttachment = (x) => {
    if (!isAttachment(x))
        return false;
    return !!x._id;
};
