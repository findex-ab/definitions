"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteSchema = exports.EInviteType = exports.EInviteStatus = void 0;
const docref_1 = require("./docref");
const user_1 = require("./user");
const superstruct_1 = require("superstruct");
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
exports.InviteSchema = superstruct_1.default.object({
    user: superstruct_1.default.assign(superstruct_1.default.omit(user_1.UserSchema, ['email']), superstruct_1.default.object({ email: superstruct_1.default.string() })),
    asset: (0, docref_1.DocRefSchema)(),
    status: superstruct_1.default.enums([EInviteStatus.PENDING, EInviteStatus.RESOLVED]),
    type: superstruct_1.default.enums([EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER])
});
