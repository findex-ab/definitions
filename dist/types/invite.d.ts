import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { RequiredFields } from './required';
import * as ss from 'superstruct';
import { Modify } from "./utils";
import { ISavedDocument } from "./savedDocument";
export declare enum EInviteStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export declare enum EInviteType {
    ASSET_ADMIN = "ASSET_ADMIN",
    SHAREHOLDER = "SHAREHOLDER"
}
export interface IInvite {
    user: RequiredFields<Partial<IUser>, 'email'>;
    asset: TDocRef<IAsset>;
    status: EInviteStatus;
    type: EInviteType;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, {
    asset: ISavedDocument<IAsset>;
}>;
export declare const InviteSchema: ss.Describe<IInvite>;
