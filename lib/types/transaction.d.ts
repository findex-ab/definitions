import * as ss from 'superstruct';
export interface ITransaction {
    action: "BUY" | "SELL" | "PRICE_UPDATE";
    quantity: number;
    price: number;
    source: "MANUAL" | "AUTOMATIC";
    date: Date;
}
export declare const TransactionSchema: ss.Describe<ITransaction>;
