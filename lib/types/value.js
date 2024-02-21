"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSchema = void 0;
const ss = require("superstruct");
exports.ValueSchema = ss.type({
    value: ss.number(),
    type: ss.optional(ss.string()),
    percentage: ss.optional(ss.number()),
    time: ss.any()
});
//# sourceMappingURL=value.js.map