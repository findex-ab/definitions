import { DocRefSchema } from "./docref";
import { UserSchema } from "./user";
import * as ss from 'superstruct';
export var EInviteStatus;
(function (EInviteStatus) {
    EInviteStatus["PENDING"] = "PENDING";
    EInviteStatus["RESOLVED"] = "RESOLVED";
})(EInviteStatus || (EInviteStatus = {}));
;
export var EInviteType;
(function (EInviteType) {
    EInviteType["ASSET_ADMIN"] = "ASSET_ADMIN";
    EInviteType["SHAREHOLDER"] = "SHAREHOLDER";
    EInviteType["GENERIC_USER"] = "GENERIC_USER";
})(EInviteType || (EInviteType = {}));
export const InviteSchema = ss.type({
    user: ss.assign(ss.omit(UserSchema, ['email']), ss.type({ email: ss.string() })),
    asset: ss.optional(DocRefSchema()),
    status: ss.enums([EInviteStatus.PENDING, EInviteStatus.RESOLVED]),
    type: ss.enums([EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER]),
    betaCode: ss.optional(ss.string())
});
