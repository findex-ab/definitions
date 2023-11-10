import { IValue, ValueSchema } from "./value";
import * as ss from 'superstruct';

export interface ILedger {
  sharesIssued: number;
  sharePrice: IValue;
}

export const LedgerSchema: ss.Describe<ILedger> = ss.object({
  sharesIssued: ss.number(),
  sharePrice: ValueSchema
});
