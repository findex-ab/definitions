"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentSchema = void 0;
const value_1 = require("./value");
const zod_1 = require("zod");
exports.InvestmentSchema = zod_1.default.object({
    asset: zod_1.default.string(),
    invested: value_1.ValueSchema,
    quantity: zod_1.default.number()
});
