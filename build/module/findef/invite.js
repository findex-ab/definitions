import { DocRefSchema } from "./docref";
import { UserSchema } from "./user";
import * as ss from 'superstruct';
import { EAdminRole } from "./assetAdmin";
export var EInviteStatus;
(function (EInviteStatus) {
    EInviteStatus["PENDING"] = "PENDING";
    EInviteStatus["RESOLVED"] = "RESOLVED";
    EInviteStatus["DECLINED"] = "DECLINED";
    EInviteStatus["DELETED"] = "DELETED";
})(EInviteStatus || (EInviteStatus = {}));
;
export var EInviteType;
(function (EInviteType) {
    EInviteType["ASSET_OWNER"] = "ASSET_OWNER";
    EInviteType["ASSET_ADMIN"] = "ASSET_ADMIN";
    EInviteType["SHAREHOLDER"] = "SHAREHOLDER";
    EInviteType["GENERIC_USER"] = "GENERIC_USER";
    EInviteType["CO_INVESTOR"] = "CO_INVESTOR";
})(EInviteType || (EInviteType = {}));
export const InviteSchema = ss.type({
    user: ss.assign(ss.omit(UserSchema, ['email', 'featurebaseIdentity']), ss.type({ email: ss.string() })),
    sender: ss.optional(DocRefSchema()),
    asset: ss.optional(DocRefSchema()),
    status: ss.enums([EInviteStatus.PENDING, EInviteStatus.RESOLVED]),
    type: ss.enums([EInviteType.ASSET_OWNER, EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER, EInviteType.GENERIC_USER]),
    betaCode: ss.optional(ss.string()),
    keyCode: ss.optional(DocRefSchema()),
    adminRole: ss.optional(ss.enums(Object.values(EAdminRole)))
});
export const ResolveInviteSchema = ss.type({
    inviteId: ss.optional(ss.string()),
    keyCode: ss.optional(ss.string()),
    email: ss.optional(ss.string())
});
