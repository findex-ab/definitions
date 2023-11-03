"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.EUserStatus = void 0;
const investment_1 = require("./investment");
const zod_1 = require("zod");
var EUserStatus;
(function (EUserStatus) {
    EUserStatus["PENDING"] = "PENDING";
    EUserStatus["RESOLVED"] = "RESOLVED";
})(EUserStatus || (exports.EUserStatus = EUserStatus = {}));
//export const userFields = keys<IUser>();
exports.UserSchema = zod_1.default.object({
    authUserId: zod_1.default.string().optional(),
    firstname: zod_1.default.string().optional(),
    lastname: zod_1.default.string().optional(),
    email: zod_1.default.string().min(3),
    phone: zod_1.default.string().optional(),
    password: zod_1.default.string().optional(),
    investments: zod_1.default.array(investment_1.InvestmentSchema),
    administratedAssets: zod_1.default.array(zod_1.default.string()).optional(),
    status: zod_1.default.string().optional()
});
