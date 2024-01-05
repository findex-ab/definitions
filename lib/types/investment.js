"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentSchema = void 0;
const value_1 = require("./value");
const ss = require("superstruct");
exports.InvestmentSchema = ss.type({
    asset: ss.string(),
    invested: value_1.ValueSchema,
    quantity: ss.number(),
    time: ss.optional(ss.date())
});
//# sourceMappingURL=investment.js.map