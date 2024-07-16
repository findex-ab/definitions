import { EAttachmentFileType, EAttachmentType, IAttachment } from './attachment';

export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent'> & {
  children?: FileNode[];
};

export const DEFAULT_USER_DIRECTORY_TREE: FileNode[] = [
  { name: 'Portfolio', type: EAttachmentType.DIRECTORY, fileType: EAttachmentFileType.DIRECTORY },
  { name: 'Shared With Me', type: EAttachmentType.DIRECTORY, fileType: EAttachmentFileType.DIRECTORY },
];
