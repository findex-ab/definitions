import * as ss from 'superstruct';

export interface ITransaction {
  action: "BUY" | "SELL" | "PRICE_UPDATE";
  quantity: number;
  price: number;
  source: "MANUAL" | "AUTOMATIC";
  date: Date;
}

export const TransactionSchema: ss.Describe<ITransaction> = ss.type({
  action: ss.enums(["BUY", "SELL", "PRICE_UPDATE"]),
  quantity: ss.number(),
  price: ss.number(),
  source: ss.enums(["MANUAL", "AUTOMATIC"]),
  date: ss.date(),
});
