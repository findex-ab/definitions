import { IAsset } from "./asset";
import { DocRefSchema, TDocRef } from "./docref";
import { IUser, UserSchema } from "./user";
import { RequiredFields } from './required';
import ss from 'superstruct';

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

export const InviteSchema: ss.Describe<IInvite> = ss.object({
  user: ss.assign(ss.omit(UserSchema, ['email']), ss.object({ email: ss.string() })),
  asset: DocRefSchema<IAsset>(),
  status: ss.enums([ EInviteStatus.PENDING, EInviteStatus.RESOLVED ]),
  type: ss.enums([ EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER ])
});
