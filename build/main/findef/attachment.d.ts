import { TDocRef } from "./docref";
import { IUser } from "./user";
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
    DIRECTORY = "DIRECTORY"
}
export declare enum EAttachmentPermission {
    READ = "READ",
    WRITE = "WRITE"
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
    sizeBytes: number;
    color?: string;
    buffer?: Uint8Array;
    type: EAttachmentType;
    fileType: EAttachmentFileType;
    permissions: AttachmentUserPermission[];
    parent?: TDocRef<IAttachment>;
    children?: TDocRef<IAttachment>[];
};
