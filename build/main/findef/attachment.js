"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAttachmentFileType = exports.EAttachmentType = void 0;
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
    EAttachmentFileType["DIRECTORY"] = "DIRECTORY";
})(EAttachmentFileType || (exports.EAttachmentFileType = EAttachmentFileType = {}));
