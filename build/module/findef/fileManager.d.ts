import { EAttachmentSystemType, IAttachment } from './attachment';
export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent' | 'systemType'> & {
    children?: FileNode[];
    forEachChild?: FileNode;
    systemType: EAttachmentSystemType;
};
export type FileCrumb = {
    name: string;
    nodeId: string;
};
export declare const USER_ROOT_DIRECTORY_TEMPLATE: FileNode;
export declare const DEFAULT_USER_DIRECTORY_TREE: FileNode[];
export declare enum EFileManagerListMode {
    ONLY_MINE = "ONLY_MINE",
    ALL = "ALL"
}
