import {
  EAttachmentFileType,
  EAttachmentSystemType,
  EAttachmentType,
  IAttachment,
} from './attachment';

export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent' | 'systemType'> & {
  children?: FileNode[];
  forEachChild?: FileNode;
  systemType: EAttachmentSystemType;
};

export type FileCrumb = {
  name: string;
  nodeId: string;
};

const directory = (props: FileNode): FileNode => {
  return {
    ...props,
    name: props.name || '',
    type: EAttachmentType.DIRECTORY,
    fileType: EAttachmentFileType.DIRECTORY,
  };
};

const systemDirectory = (props: FileNode): FileNode => {
  return {
    ...directory(props),
    canBeDeleted: false,
  };
};

export const USER_ROOT_DIRECTORY_TEMPLATE: FileNode = systemDirectory({
  name: '/',
  systemType: EAttachmentSystemType.USER_ROOT_DIRECTORY,
  children: [
    systemDirectory({
      name: 'Portfolio',
      systemType: EAttachmentSystemType.USER_PORTFOLIO_DIRECTORY,
      sortPriority: -1,
      children: [
        systemDirectory({
          name: 'Assets',
          systemType: EAttachmentSystemType.USER_PORTFOLIO_ASSETS_DIRECTORY,
          sortPriority: -1,
          forEachChild: systemDirectory({
            systemType: EAttachmentSystemType.ASSET_DIRECTORY,
            children: [
              systemDirectory({
                name: 'My Documents',
                systemType: EAttachmentSystemType.USER_INVESTMENT_DIRECTORY
              }),
              systemDirectory({
                name: 'Shared with Me',
                systemType: EAttachmentSystemType.USER_SHARED_DIRECTORY
              }),
            ],
          }),
        }),
        systemDirectory({
          name: 'Liabilities',
          systemType:
            EAttachmentSystemType.USER_PORTFOLIO_LIABILITIES_DIRECTORY,
          sortPriority: 1,
        }),
      ],
    }),
    systemDirectory({
      name: 'Shared With Me',
      systemType: EAttachmentSystemType.USER_SHARED_DIRECTORY,
      sortPriority: Number.MAX_SAFE_INTEGER,
    }),
    systemDirectory({
      name: 'Uploads',
      systemType: EAttachmentSystemType.USER_UPLOADS_DIRECTORY,
      sortPriority: 1,
    }),
  ],
});

export const DEFAULT_USER_DIRECTORY_TREE: FileNode[] = [
  ...(USER_ROOT_DIRECTORY_TEMPLATE.children || [])
];

export enum EFileManagerListMode {
  ONLY_MINE = 'ONLY_MINE',
  ALL = 'ALL',
}
