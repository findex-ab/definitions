import { IAsset } from './asset';
import { IBlob } from './blob';
import { IDeferredLogo } from './deferredLogo';
import { getRefId, TDocRef } from './docref';
import { IInvestment } from './investment';
import { ILiability } from './liability';
import { INotification } from './notification';
import { EPermissionGroup } from './permission';
import { ISavedDocument } from './savedDocument';
import { isUser, IUser } from './user';

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
  PDF = 'PDF',
  SPREADSHEET = 'SPREADSHEET',
  DIRECTORY = 'DIRECTORY',
  ARCHIVE_ZIP = 'ARCHIVE_ZIP',
  ARCHIVE_TAR_GZ = 'ARCHIVE_TAR_GZ',
  ARCHIVE_TAR = 'ARCHIVE_TAR',
  ARCHIVE_RAR = 'ARCHIVE_RAR'
}

export enum EAttachmentSystemType {
  USER_ROOT_DIRECTORY = 'USER_ROOT_DIRECTORY',
  USER_UPLOADS_DIRECTORY = 'USER_UPLOADS_DIRECTORY',
  USER_SHARED_DIRECTORY = 'USER_SHARED_DIRECTORY',
  USER_PORTFOLIO_DIRECTORY = 'USER_PORTFOLIO_DIRECTORY',
  USER_PORTFOLIO_ASSETS_DIRECTORY = 'USER_PORTFOLIO_ASSETS_DIRECTORY',
  USER_PORTFOLIO_LIABILITIES_DIRECTORY = 'USER_PORTFOLIO_LIABILITIES_DIRECTORY',
  USER_INVESTMENT_DIRECTORY = 'USER_INVESTMENT_DIRECTORY',
  USER_LIABILITY_DIRECTORY = 'USER_LIABILITY_DIRECTORY',

  IR_ASSET_DIRECTORY = 'IR_ASSET_DIRECTORY',
  ASSET_DIRECTORY = 'ASSET_DIRECTORY',
  LIABILITY_DIRECTORY = 'LIABILITY_DIRECTORY',

  ARBITRARY = 'ARBITRARY'
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
  symbol?: string;
  source?: string;
  sourceUrl?: string;
  deferred?: boolean;
  deferredArgs?: IDeferredLogo;
  mime?: string;
  sizeBytes: number;
  color?: string;
  buffer?: Uint8Array;
  type: EAttachmentType;
  fileType: EAttachmentFileType;
  systemType?: EAttachmentSystemType;
  canBeDeleted?: boolean;
  permissions: AttachmentUserPermission[];
  permissionGroups?: EPermissionGroup[];
  public?: boolean;
  parent?: TDocRef<IAttachment>;
  children?: TDocRef<IAttachment>[];
  symbolicParents?: TDocRef<IAttachment>[];
  liability?: TDocRef<ILiability>;
  asset?: TDocRef<IAsset>;
  investment?: TDocRef<IInvestment>;
  sortPriority?: number;
  blob?: TDocRef<IBlob>;
  blob1mb?: TDocRef<IBlob>;
  tags?: string[];
  accessGainedNotification?: Partial<INotification>;
  sendAccessGainedNotification?: boolean;
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

const toStr = (x: any): string => {
  if (typeof x === 'string') return x;
  if (typeof x === 'object' && x.toString && typeof x.toString === 'function') return x.toString() as string;
  return x + '';
}

export const getAttachmentParentId = (attachment: ISavedDocument<IAttachment>, symbolic: boolean = false): string | null => {
  const symbolicParents = attachment.symbolicParents;
  const parent = attachment.parent;

  if (symbolic) {
    if (!symbolicParents || symbolicParents.length <= 0) return null;
    return getRefId(symbolicParents[0]) || null;
  }

  if (!parent) return null;
  return getRefId(parent) || null;
}

export const getAttachmentOwner = (attachment: ISavedDocument<IAttachment>): IUser | null => {
  if (isUser(attachment.user)) return attachment.user;
  if (attachment.permissions && attachment.permissions.length > 0) {
    let perm = attachment.permissions.find((it) => it.flags.includes(EAttachmentPermission.READ_WRITE));
    if (perm && isUser(perm.user)) return perm.user;
    perm = attachment.permissions.find((it) => it.flags.includes(EAttachmentPermission.WRITE));
    if (perm && isUser(perm.user)) return perm.user;
  }
  return null;
}

export const userIsOwnerOfAttachment = (
  user: ISavedDocument<IUser> | string,
  attachment: ISavedDocument<IAttachment>,
): boolean => {
  if (attachment.user && getRefId(attachment.user) === getRefId(user)) return true;
  const owner = getAttachmentOwner(attachment);
  if (!owner) return false;
  const idA = toStr(getRefId(user));
  const idB = toStr(getRefId(owner));
  return idA === idB;
}

export const getUserAttachmentPermissions = (
  user: ISavedDocument<IUser> | string,
  attachment: ISavedDocument<IAttachment>,
): EAttachmentPermission[] => {
  if (userIsOwnerOfAttachment(user, attachment))
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
