import {
  EAttachmentFileType,
  EAttachmentSystemType,
  EAttachmentType,
  IAttachment,
} from './attachment';

export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent'> & {
  children?: FileNode[];
};

export type FileCrumb = {
  name: string;
  nodeId: string;
}

export const DEFAULT_USER_DIRECTORY_TREE: FileNode[] = [
  {
    name: 'Portfolio',
    type: EAttachmentType.DIRECTORY,
    fileType: EAttachmentFileType.DIRECTORY,
    systemType: EAttachmentSystemType.USER_PORTFOLIO_DIRECTORY,
    canBeDeleted: false,
    children: [
      {
        name: 'Assets',
        type: EAttachmentType.DIRECTORY,
        fileType: EAttachmentFileType.DIRECTORY,
        systemType: EAttachmentSystemType.USER_PORTFOLIO_ASSETS_DIRECTORY,
        canBeDeleted: false
      },
      {
        name: 'Liabilities',
        type: EAttachmentType.DIRECTORY,
        fileType: EAttachmentFileType.DIRECTORY,
        systemType: EAttachmentSystemType.USER_PORTFOLIO_LIABILITIES_DIRECTORY,
        canBeDeleted: false
      },
    ]
  },
  {
    name: 'Shared With Me',
    type: EAttachmentType.DIRECTORY,
    fileType: EAttachmentFileType.DIRECTORY,
    systemType: EAttachmentSystemType.USER_SHARED_DIRECTORY,
    canBeDeleted: false
  }
];
