"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
const ss = require("superstruct");
exports.TransactionSchema = ss.type({
    action: ss.enums(["BUY", "SELL", "PRICE_UPDATE"]),
    quantity: ss.number(),
    price: ss.number(),
    source: ss.enums(["MANUAL", "AUTOMATIC"]),
    date: ss.date(),
});
//# sourceMappingURL=transaction.js.map