import { IAttachment } from './attachment';

export type FileNode = Omit<Partial<IAttachment>, 'children' | 'parent'> & {
  children?: FileNode[];
};

export const DEFAULT_USER_DIRECTORY_TREE: FileNode[] = [
  { name: 'Portfolio' },
  { name: 'Shared With Me' },
];
