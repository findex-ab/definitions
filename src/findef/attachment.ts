import { TDocRef } from "./docref";
import { ISavedDocument } from "./savedDocument";
import { IUser } from "./user";

export enum EAttachmentType {
  FILE = 'FILE',
  DIRECTORY = 'DIRECTORY'
}

export enum EAttachmentFileType {
  UNKNOWN = 'UNKNOWN',
  BINARY = 'BINARY',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  CODE = 'CODE',
  TEXT = 'TEXT',
  DOCUMENT = 'DOCUMENT',
  SPREADSHEET = 'SPREADSHEET',
  DIRECTORY = 'DIRECTORY'
}

export enum EAttachmentPermission {
  READ = 'READ',
  WRITE = 'WRITE'
}

export type AttachmentUserPermission = {
  user: TDocRef<IUser>;
  flags: EAttachmentPermission[];
}

export type IAttachment = {
  user?: TDocRef<IUser>;
  name: string;
  savedName: string;
  uid: string;
  sizeBytes: number;
  color?: string;
  buffer?: Uint8Array;
  type: EAttachmentType;
  fileType: EAttachmentFileType;
  permissions: AttachmentUserPermission[];
  public?: boolean;
  parent?: TDocRef<IAttachment>;
  children?: TDocRef<IAttachment>[];
};

export const isAttachment = (x: any): x is IAttachment => {
  if (!x) return false;
  if (typeof x !== 'object') return false;
  return (!!x.type && !!x.fileType && !!x.name);
}

export const isSavedAttachment = (x: any): x is ISavedDocument<IAttachment> => {
  if (!isAttachment(x)) return false;
  return !!(x as any)._id;
}
