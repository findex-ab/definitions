import { RefSchema } from "./docref";
import { InvestmentSchema } from "./investment";
import * as ss from 'superstruct';
import { UserDefinitionsSchema } from "./userDefinitions";
import { IntegrationProviderSchema } from "./integrationProvider";
import { PortfolioSchema } from "./portfolio";
import { EAuthenticationMethod } from "./auth";
export var EUserStatus;
(function (EUserStatus) {
    EUserStatus["PENDING"] = "PENDING";
    EUserStatus["RESOLVED"] = "RESOLVED";
})(EUserStatus || (EUserStatus = {}));
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
    featurebaseIdentity: ss.string()
});
export const userHasRole = (user, role) => {
    if (!user.roles || user.roles.length <= 0)
        return false;
    return !!user.roles.find(r => {
        if ((r.name || '').toLowerCase() === role.toLowerCase())
            return true;
        if ((r.description || '').toLowerCase() === role.toLowerCase())
            return true;
        return false;
    });
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
});
export const isUser = (x) => {
    return typeof x === 'object' && typeof x._id !== 'undefined' && typeof x.email === 'string';
};
