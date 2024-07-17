import { IAsset } from "./asset";
import { DocRefSchema, TDocRef } from "./docref";
import { IUser, UserSchema } from "./user";
import { RequiredFields } from './required';
import * as ss from 'superstruct';
import { Modify } from "./utils";
import { ISavedDocument } from "./savedDocument";
import { IKeyCode } from "./keycode";

export enum EInviteStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED'
};

export enum EInviteType {
  ASSET_OWNER = 'ASSET_OWNER',
  ASSET_ADMIN = 'ASSET_ADMIN',
  SHAREHOLDER = 'SHAREHOLDER',
  GENERIC_USER = 'GENERIC_USER',
  CO_INVESTOR = 'CO_INVESTOR'
}

export interface IInvite {
  user: RequiredFields<Partial<IUser>, 'email'>;
  sender?: TDocRef<IUser>;
  asset?: TDocRef<IAsset>;
  status: EInviteStatus;
  type: EInviteType;
  betaCode?: string;
  keyCode?: TDocRef<IKeyCode>;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, { asset: ISavedDocument<IAsset> }>;

export const InviteSchema = ss.type({
  user: ss.assign(ss.omit(UserSchema, ['email']), ss.type({ email: ss.string() })),
  sender: ss.optional(DocRefSchema<IUser>()),
  asset: ss.optional(DocRefSchema<IAsset>()),
  status: ss.enums([ EInviteStatus.PENDING, EInviteStatus.RESOLVED ]),
  type: ss.enums([ EInviteType.ASSET_OWNER, EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER, EInviteType.GENERIC_USER ]),
  betaCode: ss.optional(ss.string()),
  keyCode: ss.optional(DocRefSchema<IKeyCode>())
});

export type ResolveInviteRequest = {
  inviteId?: string;
  keyCode?: string;
  email?: string;
}

export const ResolveInviteSchema: ss.Describe<ResolveInviteRequest> = ss.type({
  inviteId: ss.optional(ss.string()),
  keyCode: ss.optional(ss.string()),
  email: ss.optional(ss.string())
});
