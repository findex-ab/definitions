import * as ss from 'superstruct';
export interface ITransaction {
    action: "BUY" | "SELL" | "PRICE_UPDATE";
    quantity: number;
    totalPrice: number;
    currency: string;
    source: "MANUAL" | "AUTOMATIC";
    timestamp: Date;
}
export declare const TransactionSchema: ss.Describe<ITransaction>;
