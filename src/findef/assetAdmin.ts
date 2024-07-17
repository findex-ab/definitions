import * as ss from 'superstruct';
import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { IInvite } from './invite';

export enum EAdminRole {
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

export const AssetAdminSchema = ss.type({
  user: ss.optional(ss.string()),
  invite: ss.optional(ss.string()),
  asset: ss.string(),
  role: ss.enums(Object.keys(EAdminRole))
})