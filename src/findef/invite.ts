import { IAsset } from "./asset";
import { DocRefSchema, TDocRef } from "./docref";
import { IUser, UserSchema } from "./user";
import { RequiredFields } from './required';
import * as ss from 'superstruct';
import { Modify } from "./utils";
import { ISavedDocument } from "./savedDocument";
import { IKeyCode } from "./keycode";
import { EAdminRole } from "./assetAdmin";
import { IReferral } from "./referral";

export enum EInviteStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  DECLINED = 'DECLINED',
  DELETED = 'DELETED'
};

export enum EInviteType {
  REFERRAL = 'REFERRAL',
  REFERRAL_COMPANY_ADMIN = 'REFERRAL_COMPANY_ADMIN',
  REFERRAL_INVESTOR = 'REFERRAL_INVESTOR',
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
  referral?: TDocRef<IReferral>;
  status: EInviteStatus;
  type: EInviteType;
  betaCode?: string;
  keyCode?: TDocRef<IKeyCode>;
  adminRole?: EAdminRole;
  templateData?: Record<string, any>;
  templateId?: string;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, { asset: ISavedDocument<IAsset> }>;

export const InviteSchema = ss.type({
  user: ss.assign(ss.omit(UserSchema, ['email', 'featurebaseIdentity']), ss.type({ email: ss.string() })),
  sender: ss.optional(DocRefSchema<IUser>()),
  asset: ss.optional(DocRefSchema<IAsset>()),
  referral: ss.optional(DocRefSchema<IAsset>()),
  status: ss.enums([ EInviteStatus.PENDING, EInviteStatus.RESOLVED ]),
  type: ss.enums([ EInviteType.ASSET_OWNER, EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER, EInviteType.GENERIC_USER, EInviteType.REFERRAL ]),
  betaCode: ss.optional(ss.string()),
  keyCode: ss.optional(DocRefSchema<IKeyCode>()),
  adminRole: ss.optional(ss.enums(Object.values(EAdminRole)))
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
