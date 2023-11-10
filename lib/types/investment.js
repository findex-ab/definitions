"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentSchema = void 0;
const value_1 = require("./value");
const superstruct_1 = require("superstruct");
exports.InvestmentSchema = superstruct_1.default.object({
    asset: superstruct_1.default.string(),
    invested: value_1.ValueSchema,
    quantity: superstruct_1.default.number()
});
