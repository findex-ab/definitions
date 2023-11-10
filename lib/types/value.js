"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSchema = void 0;
const ss = require("superstruct");
exports.ValueSchema = ss.object({
    value: ss.number(),
    type: ss.optional(ss.string()),
    percentage: ss.optional(ss.number()),
});
//# sourceMappingURL=value.js.map