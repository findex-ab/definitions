import { IAsset } from "./asset";
import { RefSchema, TDocRef } from "./docref";
import { IInvestment, InvestmentSchema } from "./investment";
import * as ss from 'superstruct';
import { UserDefinitionsSchema } from "./userDefinitions";
import { IntegrationProvider, IntegrationProviderSchema, ProviderSession } from "./integrationProvider";
import { Portfolio, PortfolioSchema } from "./portfolio";
import { EAuthenticationMethod } from "./auth";
import { IntegrationImport } from "./integrationImport";
import { EUserRole, FindexUserRole } from "./userRole";
import { IAttachment } from "./attachment";
import { WorldLocation } from "./worldLocation";
import { EUserCapability } from "./userCapability";

export enum EUserStatus {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED"
}

// Details that we don't store on the user in the database,
// but information that is computed by the server
export type UserDetails = {
  emailVerified: boolean;
}

export interface IUser {
  authUserId?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  emailVerified?: boolean;
  lastVerificationEmailSentAt?: Date;
  alternativeEmail?: string;
  authenticationMethod?: EAuthenticationMethod;
  phone?: string;
  personalNumber?: string;
  password?: string;
  investments?: IInvestment[];
  administratedAssets?: TDocRef<IAsset>[];
  status?: EUserStatus;
  providers?: IntegrationProvider[];
  providerSessions?: ProviderSession[];
  integrationImports?: IntegrationImport[];
  color: string;
  portfolio?: Portfolio;
  country?: string;
  currency?: string;
  agreedTermsOfUseDate?: Date;
  lastActivity?: Date;
  lastOnline?: Date;
  lastLogin?: Date;
  subscribedToNewsletter?: boolean;
  roles?: FindexUserRole[];
  avatar?: TDocRef<IAttachment>;
  lastSessionTimeSeconds?: number;
  isOnline?: boolean;
  location?: Partial<WorldLocation>;
  capabilities?: EUserCapability[];
  featurebaseIdentity?: string;
  klaviyoId?: string;
}

//export const userFields = keys<IUser>();

export const UserSchema = ss.type({
  authUserId: ss.optional(ss.string()),
  firstname: ss.optional(ss.string()),
  lastname: ss.optional(ss.string()),
  email: ss.string(),
  emailVerified: ss.optional(ss.boolean()),
  phone: ss.optional(ss.string()),
  personalNumber: ss.optional(ss.string()),
  password: ss.optional(ss.string()),
  investments: ss.optional(ss.array(InvestmentSchema)),
  administratedAssets: ss.optional(ss.array(ss.any())),
  status: ss.optional(ss.enums([EUserStatus.PENDING, EUserStatus.RESOLVED])),
  definitions: ss.optional(UserDefinitionsSchema),
  providers: ss.optional(ss.array(IntegrationProviderSchema)),
  portfolio: ss.optional(PortfolioSchema),
  authenticationMethod: ss.optional(ss.enums([EAuthenticationMethod.PASSWORD, EAuthenticationMethod.BANKID])),
  country: ss.optional(ss.string()),
  currency: ss.optional(ss.string()),
  agreedTermsOfUseDate: ss.optional(ss.string()),
  lastActivity: ss.optional(ss.string()),
  lastOnline: ss.optional(ss.string()),
  subscribedToNewsletter: ss.optional(ss.boolean()),
  avatar: ss.optional(RefSchema),
  lastSessionTimeSeconds: ss.optional(ss.number()),
  isOnline: ss.optional(ss.boolean()),
  featurebaseIdentity: ss.optional(ss.string()),
  klaviyoId: ss.optional(ss.string())
});

export type IInvestor = IUser;

export const userHasRole = (user: IUser, role: EUserRole): boolean => {
  if (!user.roles || user.roles.length <= 0) return false;
  return !!user.roles.find(r => {
    if ((r.name || '').toLowerCase() === role.toLowerCase()) return true;
    if ((r.description || '').toLowerCase() === role.toLowerCase()) return true;
    return false;
  })
}

export type CreateUserAccountRequest = {
  email: string;
  firstname?: string;
  lastname?: string;
  newsLetter?: boolean;
  authUserId?: string;
  country?: string;
  agreeTermsDate: Date;
  authenticationMethod: EAuthenticationMethod;
  betaCode?: string;
  inviteId?: string;
};

export const CreateUserAccountSchema = ss.type({
  email: ss.string(),
  firstname: ss.optional(ss.string()),
  lastname: ss.optional(ss.string()),
  authUserId: ss.optional(ss.string()),
  country: ss.optional(ss.string()),
  newsLetter: ss.optional(ss.boolean()),
  agreeTermsDate: ss.string(),
  authenticationMethod: ss.enums([
    EAuthenticationMethod.BANKID,
    EAuthenticationMethod.PASSWORD
  ]),
  betaCode: ss.optional(ss.string()),
  inviteId: ss.optional(ss.string())
})


export const isUser = (x: any): x is IUser => {
  return typeof x === 'object' && typeof x._id !== 'undefined' && typeof x.email === 'string';
}
