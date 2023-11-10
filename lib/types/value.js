"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSchema = void 0;
const superstruct_1 = require("superstruct");
exports.ValueSchema = superstruct_1.default.object({
    value: superstruct_1.default.number(),
    type: superstruct_1.default.optional(superstruct_1.default.string()),
    percentage: superstruct_1.default.optional(superstruct_1.default.number()),
});
