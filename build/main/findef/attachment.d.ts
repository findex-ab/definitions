import { FullAsset, IAsset } from './asset';
import { IBlob } from './blob';
import { IDeferredLogo } from './deferredLogo';
import { TDocRef } from './docref';
import { IInvestment } from './investment';
import { ILiability } from './liability';
import { INotification } from './notification';
import { EPermissionGroup } from './permission';
import { ISavedDocument } from './savedDocument';
import { IUser } from './user';
export declare enum EAttachmentType {
    FILE = "FILE",
    DIRECTORY = "DIRECTORY"
}
export declare enum EAttachmentFileType {
    UNKNOWN = "UNKNOWN",
    BINARY = "BINARY",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    AUDIO = "AUDIO",
    CODE = "CODE",
    TEXT = "TEXT",
    DOCUMENT = "DOCUMENT",
    PDF = "PDF",
    SPREADSHEET = "SPREADSHEET",
    DIRECTORY = "DIRECTORY",
    ARCHIVE_ZIP = "ARCHIVE_ZIP",
    ARCHIVE_TAR_GZ = "ARCHIVE_TAR_GZ",
    ARCHIVE_TAR = "ARCHIVE_TAR",
    ARCHIVE_RAR = "ARCHIVE_RAR"
}
export declare enum EAttachmentSystemType {
    USER_ROOT_DIRECTORY = "USER_ROOT_DIRECTORY",
    USER_UPLOADS_DIRECTORY = "USER_UPLOADS_DIRECTORY",
    USER_SHARED_DIRECTORY = "USER_SHARED_DIRECTORY",
    USER_PORTFOLIO_DIRECTORY = "USER_PORTFOLIO_DIRECTORY",
    USER_PORTFOLIO_ASSETS_DIRECTORY = "USER_PORTFOLIO_ASSETS_DIRECTORY",
    USER_PORTFOLIO_LIABILITIES_DIRECTORY = "USER_PORTFOLIO_LIABILITIES_DIRECTORY",
    USER_INVESTMENT_DIRECTORY = "USER_INVESTMENT_DIRECTORY",
    USER_LIABILITY_DIRECTORY = "USER_LIABILITY_DIRECTORY",
    IR_ASSET_DIRECTORY = "IR_ASSET_DIRECTORY",
    ASSET_DIRECTORY = "ASSET_DIRECTORY",
    LIABILITY_DIRECTORY = "LIABILITY_DIRECTORY",
    ASSET_DIRECTORY_PUBLIC = "ASSET_DIRECTORY_PUBLIC",
    ASSET_DIRECTORY_USER_PRIVATE = "ASSET_DIRECTORY_USER_PRIVATE",
    ARBITRARY = "ARBITRARY"
}
export declare enum EAttachmentPermission {
    READ = "READ",
    WRITE = "WRITE",
    READ_WRITE = "READ_WRITE"
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
    dirty?: boolean;
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
export type PopulatedAttachment = Omit<ISavedDocument<IAttachment>, 'asset' | 'children'> & {
    asset?: ISavedDocument<IAsset>;
    children?: ISavedDocument<IAttachment>[];
};
export type IAttachmentTree = Omit<ISavedDocument<IAttachment, string>, 'children' | 'asset'> & {
    children?: IAttachmentTree[];
    asset?: FullAsset;
};
export declare const isAttachment: (x: any) => x is IAttachment;
export declare const isSavedAttachment: (x: any) => x is ISavedDocument<IAttachment>;
export declare const getAttachmentParentId: (attachment: ISavedDocument<IAttachment> | IAttachmentTree, symbolic?: boolean) => string | null;
export declare const getAttachmentOwner: (attachment: ISavedDocument<IAttachment> | IAttachmentTree) => IUser | null;
export declare const userIsOwnerOfAttachment: (user: ISavedDocument<IUser> | string, attachment: ISavedDocument<IAttachment> | IAttachmentTree) => boolean;
export declare const getUserAttachmentPermissions: (user: ISavedDocument<IUser> | string, attachment: ISavedDocument<IAttachment> | IAttachmentTree) => EAttachmentPermission[];
export declare const userCanModifyAttachment: (user: ISavedDocument<IUser> | string, attachment: ISavedDocument<IAttachment> | IAttachmentTree) => boolean;
export declare const userCanReadAttachment: (user: ISavedDocument<IUser> | string, attachment: ISavedDocument<IAttachment> | IAttachmentTree) => boolean;
export declare const userCanDeleteAttachment: (user: ISavedDocument<IUser> | string, attachment: ISavedDocument<IAttachment> | IAttachmentTree) => boolean;
export declare const attachmentIsOwnedByCompany: (attachment: ISavedDocument<IAttachment> | IAttachmentTree) => boolean;
