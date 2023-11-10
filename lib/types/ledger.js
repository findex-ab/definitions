"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerSchema = void 0;
const value_1 = require("./value");
const superstruct_1 = require("superstruct");
exports.LedgerSchema = superstruct_1.default.object({
    sharesIssued: superstruct_1.default.number(),
    sharePrice: value_1.ValueSchema
});
