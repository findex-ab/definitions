import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment, InvestmentSchema } from "./investment";
import * as ss from 'superstruct';
import { IUserDefinitions, UserDefinitionsSchema } from "./userDefinitions";
import { IntegrationProvider, IntegrationProviderSchema, ProviderSession } from "./integrationProvider";
import { Portfolio, PortfolioSchema } from "./portfolio";
import { EAuthenticationMethod } from "./auth";
import { IntegrationImport } from "./integrationImport";
import { EUserRole, FindexUserRole } from "./userRole";


export enum EUserStatus {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED"
}

export interface IUser {
  authUserId?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  alternativeEmail?: string;
  authenticationMethod?: EAuthenticationMethod;
  phone?: string;
  personalNumber?: string;
  password?: string;
  investments?: IInvestment[];
  administratedAssets?: TDocRef<IAsset>[];
  status?: EUserStatus;
  definitions?: IUserDefinitions;
  providers?: IntegrationProvider[];
  providerSessions?: ProviderSession[];
  integrationImports?: IntegrationImport[];
  portfolio?: Portfolio;
  country?: string;
  agreedTermsOfUseDate?: Date;
  subscribedToNewsletter?: boolean;
  roles?: FindexUserRole[];
}

//export const userFields = keys<IUser>();

export const UserSchema = ss.type({
  authUserId: ss.optional(ss.string()),
  firstname: ss.optional(ss.string()),
  lastname: ss.optional(ss.string()),
  email: ss.string(),
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
  agreedTermsOfUseDate: ss.optional(ss.string()),
  subscribedToNewsletter: ss.optional(ss.boolean()),
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
