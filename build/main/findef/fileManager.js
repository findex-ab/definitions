"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_USER_DIRECTORY_TREE = void 0;
const attachment_1 = require("./attachment");
exports.DEFAULT_USER_DIRECTORY_TREE = [
    { name: 'Portfolio', type: attachment_1.EAttachmentType.DIRECTORY, fileType: attachment_1.EAttachmentFileType.DIRECTORY },
    { name: 'Shared With Me', type: attachment_1.EAttachmentType.DIRECTORY, fileType: attachment_1.EAttachmentFileType.DIRECTORY },
];
