import { TDocRef } from "./docref";
import { IUser } from "./user";
export declare enum EAttachmentType {
    FILE = "FILE",
    DIRECTORY = "DIRECTORY"
}
export type IAttachment = {
    user?: TDocRef<IUser>;
    name: string;
    savedName: string;
    uid: string;
    buffer?: Uint8Array;
    type: EAttachmentType;
    parent?: TDocRef<IAttachment>;
    children?: TDocRef<IAttachment>[];
};
