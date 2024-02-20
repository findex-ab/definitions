import { InvestmentSchema } from "./investment";
import * as ss from 'superstruct';
import { UserDefinitionsSchema } from "./userDefinitions";
import { IntegrationProviderSchema } from "./integrationProvider";
import { PortfolioSchema } from "./portfolio";
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
    phone: ss.optional(ss.string()),
    personalNumber: ss.optional(ss.string()),
    password: ss.optional(ss.string()),
    investments: ss.optional(ss.array(InvestmentSchema)),
    administratedAssets: ss.optional(ss.array(ss.string())),
    status: ss.optional(ss.enums([EUserStatus.PENDING, EUserStatus.RESOLVED])),
    definitions: ss.optional(UserDefinitionsSchema),
    providers: ss.optional(ss.array(IntegrationProviderSchema)),
    portfolio: ss.optional(PortfolioSchema)
});
//# sourceMappingURL=user.js.map