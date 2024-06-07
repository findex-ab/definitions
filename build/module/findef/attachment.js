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
