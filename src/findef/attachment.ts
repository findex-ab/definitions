import { TDocRef } from "./docref";
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
  DIRECTORY = 'DIRECTORY'
}

export type IAttachment = {
  user?: TDocRef<IUser>;
  name: string;
  savedName: string;
  uid: string;
  buffer?: Uint8Array;
  type: EAttachmentType;
  fileType: EAttachmentFileType;
  parent?: TDocRef<IAttachment>;
  children?: TDocRef<IAttachment>[];
};
