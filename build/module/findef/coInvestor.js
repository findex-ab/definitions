import * as ss from 'superstruct';
export var ECoInvestorRole;
(function (ECoInvestorRole) {
    ECoInvestorRole["OWNER"] = "OWNER";
    ECoInvestorRole["ADMIN"] = "ADMIN";
    ECoInvestorRole["MEMBER"] = "MEMBER";
})(ECoInvestorRole || (ECoInvestorRole = {}));
export const CoInvestorSchema = ss.type({
    user: ss.any(),
    fraction: ss.number(),
    role: ss.enums(Object.keys(ECoInvestorRole)),
    userData: ss.optional(ss.type({
        firstname: ss.string(),
        lastname: ss.string(),
        email: ss.string()
    }))
});
