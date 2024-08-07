import { IAttachment } from './attachment';
export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent'> & {
    children?: FileNode[];
};
export type FileCrumb = {
    name: string;
    nodeId: string;
};
export declare const DEFAULT_USER_DIRECTORY_TREE: FileNode[];
export declare enum EFileManagerListMode {
    ONLY_MINE = "ONLY_MINE",
    ALL = "ALL"
}
