import { IAsset } from "./asset";
import { DocRefSchema, TDocRef } from "./docref";
import { IUser, UserSchema } from "./user";
import { RequiredFields } from './required';
import * as ss from 'superstruct';
import { Modify } from "./utils";
import { ISavedDocument } from "./savedDocument";

export enum EInviteStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED'
};

export enum EInviteType {
  ASSET_ADMIN = 'ASSET_ADMIN',
  SHAREHOLDER = 'SHAREHOLDER',
  GENERIC_USER = 'GENERIC_USER'
}

export interface IInvite {
  user: RequiredFields<Partial<IUser>, 'email'>;
  asset: TDocRef<IAsset>;
  status: EInviteStatus;
  type: EInviteType;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, { asset: ISavedDocument<IAsset> }>;

export const InviteSchema = ss.type({
  user: ss.assign(ss.omit(UserSchema, ['email']), ss.type({ email: ss.string() })),
  asset: DocRefSchema<IAsset>(),
  status: ss.enums([ EInviteStatus.PENDING, EInviteStatus.RESOLVED ]),
  type: ss.enums([ EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER ])
});
