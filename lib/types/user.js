"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.EUserStatus = void 0;
const investment_1 = require("./investment");
const superstruct_1 = require("superstruct");
var EUserStatus;
(function (EUserStatus) {
    EUserStatus["PENDING"] = "PENDING";
    EUserStatus["RESOLVED"] = "RESOLVED";
})(EUserStatus || (exports.EUserStatus = EUserStatus = {}));
//export const userFields = keys<IUser>();
exports.UserSchema = superstruct_1.default.object({
    authUserId: superstruct_1.default.optional(superstruct_1.default.string()),
    firstname: superstruct_1.default.optional(superstruct_1.default.string()),
    lastname: superstruct_1.default.optional(superstruct_1.default.string()),
    email: superstruct_1.default.string(),
    phone: superstruct_1.default.optional(superstruct_1.default.string()),
    password: superstruct_1.default.optional(superstruct_1.default.string()),
    investments: superstruct_1.default.optional(superstruct_1.default.array(investment_1.InvestmentSchema)),
    administratedAssets: superstruct_1.default.optional(superstruct_1.default.array(superstruct_1.default.string())),
    status: superstruct_1.default.optional(superstruct_1.default.enums([EUserStatus.PENDING, EUserStatus.RESOLVED]))
});
