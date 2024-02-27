import { ValueSchema } from "./value";
import * as ss from 'superstruct';
export const LedgerSchema = ss.type({
    sharesIssued: ss.number(),
    sharePrice: ValueSchema
});
