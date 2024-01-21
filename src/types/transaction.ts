import * as ss from 'superstruct';

export interface ITransaction {
  action: "BUY" | "SELL" | "PRICE_UPDATE";
  quantity: number;
  totalPrice: number;
  currency: string;
  source: "MANUAL" | "AUTOMATIC";
  timestamp: Date;
}

export const TransactionSchema: ss.Describe<ITransaction> = ss.type({
  action: ss.enums(["BUY", "SELL", "PRICE_UPDATE"]),
  quantity: ss.number(),
  totalPrice: ss.number(),
  currency: ss.string(),
  source: ss.enums(["MANUAL", "AUTOMATIC"]),
  timestamp: ss.date(),
});
