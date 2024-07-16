import { EAttachmentFileType, EAttachmentType } from './attachment';
export const DEFAULT_USER_DIRECTORY_TREE = [
    { name: 'Portfolio', type: EAttachmentType.DIRECTORY, fileType: EAttachmentFileType.DIRECTORY },
    { name: 'Shared With Me', type: EAttachmentType.DIRECTORY, fileType: EAttachmentFileType.DIRECTORY },
];
