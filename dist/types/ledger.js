"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerSchema = void 0;
const value_1 = require("./value");
const ss = require("superstruct");
exports.LedgerSchema = ss.type({
    sharesIssued: ss.number(),
    sharePrice: value_1.ValueSchema
});
//# sourceMappingURL=ledger.js.map