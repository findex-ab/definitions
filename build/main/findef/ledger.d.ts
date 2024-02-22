import { IValue } from "./value";
import * as ss from 'superstruct';
export interface ILedger {
    sharesIssued: number;
    sharePrice: IValue;
}
export declare const LedgerSchema: ss.Describe<ILedger>;
