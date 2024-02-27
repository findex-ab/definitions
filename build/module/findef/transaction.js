import * as ss from 'superstruct';
export const TransactionSchema = ss.type({
    action: ss.enums(["BUY", "SELL", "PRICE_UPDATE"]),
    quantity: ss.number(),
    totalPrice: ss.number(),
    currency: ss.string(),
    source: ss.enums(["MANUAL", "AUTOMATIC"]),
    timestamp: ss.date(),
});
