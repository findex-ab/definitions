import * as ss from 'superstruct';
import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { IInvite } from './invite';
export declare enum EAdminRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}
export interface IAssetAdmin {
    user?: TDocRef<IUser>;
    invite?: TDocRef<IInvite>;
    asset: TDocRef<IAsset>;
    role: EAdminRole;
}
export interface IUpdateAssetAdmin {
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: EAdminRole;
    assetId?: string;
}
export declare const AssetAdminSchema: ss.Struct<{
    asset: string;
    role: string;
    user?: string | undefined;
    invite?: string | undefined;
}, {
    user: ss.Struct<string | undefined, null>;
    invite: ss.Struct<string | undefined, null>;
    asset: ss.Struct<string, null>;
    role: ss.Struct<string, {
        [x: string]: string;
    }>;
}>;
