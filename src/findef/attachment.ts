import { IAsset } from './asset';
import { getRefId, TDocRef } from './docref';
import { IInvestment } from './investment';
import { ISavedDocument } from './savedDocument';
import { IUser } from './user';

export enum EAttachmentType {
  FILE = 'FILE',
  DIRECTORY = 'DIRECTORY',
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
  DIRECTORY = 'DIRECTORY',
}

export enum EAttachmentSystemType {
  USER_ROOT_DIRECTORY = 'USER_ROOT_DIRECTORY',
  USER_UPLOADS_DIRECTORY = 'USER_UPLOADS_DIRECTORY',
  USER_SHARED_DIRECTORY = 'USER_SHARED_DIRECTORY',
  USER_PORTFOLIO_DIRECTORY = 'USER_PORTFOLIO_DIRECTORY',
  USER_PORTFOLIO_ASSETS_DIRECTORY = 'USER_PORTFOLIO_ASSETS_DIRECTORY',
  USER_PORTFOLIO_LIABILITIES_DIRECTORY = 'USER_PORTFOLIO_LIABILITIES_DIRECTORY',
  USER_INVESTMENT_DIRECTORY = 'USER_INVESTMENT_DIRECTORY',

  IR_ASSET_DIRECTORY = 'IR_ASSET_DIRECTORY',
}

export enum EAttachmentPermission {
  READ = 'READ',
  WRITE = 'WRITE',
  READ_WRITE = 'READ_WRITE',
}

export type AttachmentUserPermission = {
  user: TDocRef<IUser>;
  flags: EAttachmentPermission[];
};

export type IAttachment = {
  user?: TDocRef<IUser>;
  name: string;
  savedName: string;
  uid: string;
  domain?: string;
  sizeBytes: number;
  color?: string;
  buffer?: Uint8Array;
  type: EAttachmentType;
  fileType: EAttachmentFileType;
  systemType?: EAttachmentSystemType;
  canBeDeleted?: boolean;
  permissions: AttachmentUserPermission[];
  public?: boolean;
  parent?: TDocRef<IAttachment>;
  children?: TDocRef<IAttachment>[];
  asset?: TDocRef<IAsset>;
  investment?: TDocRef<IInvestment>;
};

export type PopulatedAttachment = Omit<
  ISavedDocument<IAttachment>,
  'asset' | 'children'
> & {
  asset?: ISavedDocument<IAsset>;
  children?: ISavedDocument<IAttachment>[];
};

export const isAttachment = (x: any): x is IAttachment => {
  if (!x) return false;
  if (typeof x !== 'object') return false;
  return !!x.type && !!x.fileType && !!x.name;
};

export const isSavedAttachment = (x: any): x is ISavedDocument<IAttachment> => {
  if (!isAttachment(x)) return false;
  return !!(x as any)._id;
};

export const getUserAttachmentPermissions = (
  user: ISavedDocument<IUser> | string,
  attachment: ISavedDocument<IAttachment>,
): EAttachmentPermission[] => {
  if (attachment.user && getRefId(user) === getRefId(attachment.user))
    return [EAttachmentPermission.READ_WRITE];
  if (!attachment.permissions) return [];
  if (attachment.permissions.length <= 0) return [];
  const permission = attachment.permissions.find(
    (it) => getRefId(it.user) === getRefId(user),
  );
  if (!permission) return [];
  if (!permission.flags) return [];
  if (permission.flags.length <= 0) return [];
  return permission.flags;
}

export const userCanModifyAttachment = (
  user: ISavedDocument<IUser> | string,
  attachment: ISavedDocument<IAttachment>,
): boolean => {
  const perms = getUserAttachmentPermissions(user, attachment);
  if (perms.length <= 0) return false;
  return perms.includes(EAttachmentPermission.READ_WRITE) || perms.includes(EAttachmentPermission.WRITE);
}

export const userCanReadAttachment = (
  user: ISavedDocument<IUser> | string,
  attachment: ISavedDocument<IAttachment>,
): boolean => {
  const perms = getUserAttachmentPermissions(user, attachment);
  if (perms.length <= 0) return false;
  return perms.includes(EAttachmentPermission.READ_WRITE) || perms.includes(EAttachmentPermission.READ);
}

export const userCanDeleteAttachment = (
  user: ISavedDocument<IUser> | string,
  attachment: ISavedDocument<IAttachment>,
): boolean => {
  if (!userCanModifyAttachment(user, attachment)) return false;
  return attachment.canBeDeleted !== false;
}
