import * as ss from 'superstruct';
export var EAdminRole;
(function (EAdminRole) {
    EAdminRole["OWNER"] = "OWNER";
    EAdminRole["ADMIN"] = "ADMIN";
    EAdminRole["MEMBER"] = "MEMBER";
})(EAdminRole || (EAdminRole = {}));
export const AssetAdminSchema = ss.type({
    user: ss.optional(ss.string()),
    invite: ss.optional(ss.string()),
    asset: ss.string(),
    role: ss.enums(Object.keys(EAdminRole))
});
