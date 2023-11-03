import { IValue } from "./value";
import z from 'zod';
export interface ILedger {
    sharesIssued: number;
    sharePrice: IValue;
}
export declare const LedgerSchema: z.ZodObject<{
    sharesIssued: z.ZodDefault<z.ZodNumber>;
    sharePrice: z.ZodObject<{
        value: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
        percentage: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        type?: string;
        percentage?: number;
    }, {
        value?: number;
        type?: string;
        percentage?: number;
    }>;
}, "strip", z.ZodTypeAny, {
    sharesIssued?: number;
    sharePrice?: {
        value?: number;
        type?: string;
        percentage?: number;
    };
}, {
    sharesIssued?: number;
    sharePrice?: {
        value?: number;
        type?: string;
        percentage?: number;
    };
}>;
