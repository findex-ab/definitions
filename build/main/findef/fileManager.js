"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_USER_DIRECTORY_TREE = void 0;
const attachment_1 = require("./attachment");
exports.DEFAULT_USER_DIRECTORY_TREE = [
    {
        name: 'Portfolio',
        type: attachment_1.EAttachmentType.DIRECTORY,
        fileType: attachment_1.EAttachmentFileType.DIRECTORY,
        systemType: attachment_1.EAttachmentSystemType.USER_PORTFOLIO_DIRECTORY,
        canBeDeleted: false,
        sortPriority: -1,
        children: [
            {
                name: 'Assets',
                type: attachment_1.EAttachmentType.DIRECTORY,
                fileType: attachment_1.EAttachmentFileType.DIRECTORY,
                systemType: attachment_1.EAttachmentSystemType.USER_PORTFOLIO_ASSETS_DIRECTORY,
                canBeDeleted: false,
                sortPriority: -1
            },
            {
                name: 'Liabilities',
                type: attachment_1.EAttachmentType.DIRECTORY,
                fileType: attachment_1.EAttachmentFileType.DIRECTORY,
                systemType: attachment_1.EAttachmentSystemType.USER_PORTFOLIO_LIABILITIES_DIRECTORY,
                canBeDeleted: false,
                sortPriority: 1
            },
        ]
    },
    {
        name: 'Shared With Me',
        type: attachment_1.EAttachmentType.DIRECTORY,
        fileType: attachment_1.EAttachmentFileType.DIRECTORY,
        systemType: attachment_1.EAttachmentSystemType.USER_SHARED_DIRECTORY,
        canBeDeleted: false,
        sortPriority: Number.MAX_SAFE_INTEGER
    },
    {
        name: 'Uploads',
        type: attachment_1.EAttachmentType.DIRECTORY,
        fileType: attachment_1.EAttachmentFileType.DIRECTORY,
        systemType: attachment_1.EAttachmentSystemType.USER_UPLOADS_DIRECTORY,
        canBeDeleted: false,
        sortPriority: 1
    }
];
