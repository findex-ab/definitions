"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceSchema = void 0;
const ss = require("superstruct");
exports.PerformanceSchema = ss.type({
    date: ss.string(),
    accMonetaryPerf: ss.number(),
    monetaryPerf: ss.number(),
    accPctPerf: ss.number(),
    pctPerf: ss.number(),
    raw: ss.string()
});
//# sourceMappingURL=performance.js.map