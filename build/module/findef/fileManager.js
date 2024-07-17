import { EAttachmentFileType, EAttachmentSystemType, EAttachmentType, } from './attachment';
export const DEFAULT_USER_DIRECTORY_TREE = [
    {
        name: 'Portfolio',
        type: EAttachmentType.DIRECTORY,
        fileType: EAttachmentFileType.DIRECTORY,
        systemType: EAttachmentSystemType.USER_PORTFOLIO_DIRECTORY,
        canBeDeleted: false
    },
    {
        name: 'Shared With Me',
        type: EAttachmentType.DIRECTORY,
        fileType: EAttachmentFileType.DIRECTORY,
        systemType: EAttachmentSystemType.USER_SHARED_DIRECTORY,
        canBeDeleted: false
    },
];
