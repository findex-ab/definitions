"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteSchema = exports.EInviteType = exports.EInviteStatus = void 0;
const docref_1 = require("./docref");
const user_1 = require("./user");
const ss = require("superstruct");
var EInviteStatus;
(function (EInviteStatus) {
    EInviteStatus["PENDING"] = "PENDING";
    EInviteStatus["RESOLVED"] = "RESOLVED";
})(EInviteStatus || (exports.EInviteStatus = EInviteStatus = {}));
;
var EInviteType;
(function (EInviteType) {
    EInviteType["ASSET_ADMIN"] = "ASSET_ADMIN";
    EInviteType["SHAREHOLDER"] = "SHAREHOLDER";
})(EInviteType || (exports.EInviteType = EInviteType = {}));
exports.InviteSchema = ss.object({
    user: ss.assign(ss.omit(user_1.UserSchema, ['email']), ss.object({ email: ss.string() })),
    asset: (0, docref_1.DocRefSchema)(),
    status: ss.enums([EInviteStatus.PENDING, EInviteStatus.RESOLVED]),
    type: ss.enums([EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER])
});
//# sourceMappingURL=invite.js.map