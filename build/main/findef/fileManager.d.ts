import { IAttachment } from './attachment';
export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent'> & {
    children?: FileNode[];
};
export type FileCrumb = {
    name: string;
    nodeId: string;
};
export declare const DEFAULT_USER_DIRECTORY_TREE: FileNode[];