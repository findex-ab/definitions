import { IValue, ValueSchema } from "./value";
import z from 'zod';

export interface ILedger {
  sharesIssued: number;
  sharePrice: IValue;
}

export const LedgerSchema = z.object({
  sharesIssued: z.number().default(1),
  sharePrice: ValueSchema
});
