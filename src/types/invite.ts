import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { RequiredFields } from './required';

export enum EInviteStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED'
};

export enum EInviteType {
  ASSET_ADMIN = 'ASSET_ADMIN',
  SHAREHOLDER = 'SHAREHOLDER'
}

export interface IInvite {
  user: RequiredFields<Partial<IUser>, 'email'>;
  asset: TDocRef<IAsset>;
  status: EInviteStatus;
  type: EInviteType;
}
