"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerSchema = void 0;
const value_1 = require("./value");
const zod_1 = require("zod");
exports.LedgerSchema = zod_1.default.object({
    sharesIssued: zod_1.default.number().default(1),
    sharePrice: value_1.ValueSchema
});
