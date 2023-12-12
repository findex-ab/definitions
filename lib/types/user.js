"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.EUserStatus = void 0;
const investment_1 = require("./investment");
const ss = require("superstruct");
var EUserStatus;
(function (EUserStatus) {
    EUserStatus["PENDING"] = "PENDING";
    EUserStatus["RESOLVED"] = "RESOLVED";
})(EUserStatus || (exports.EUserStatus = EUserStatus = {}));
//export const userFields = keys<IUser>();
exports.UserSchema = ss.type({
    authUserId: ss.optional(ss.string()),
    firstname: ss.optional(ss.string()),
    lastname: ss.optional(ss.string()),
    email: ss.string(),
    phone: ss.optional(ss.string()),
    personalNumber: ss.optional(ss.string()),
    password: ss.optional(ss.string()),
    investments: ss.optional(ss.array(investment_1.InvestmentSchema)),
    administratedAssets: ss.optional(ss.array(ss.string())),
    status: ss.optional(ss.enums([EUserStatus.PENDING, EUserStatus.RESOLVED]))
});
//# sourceMappingURL=user.js.map