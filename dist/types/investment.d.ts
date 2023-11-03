import { TDocRef } from "./docref";
import { IValue } from "./value";
import z from 'zod';
import { IAsset } from "./asset";
export interface IInvestment {
    asset: TDocRef<IAsset>;
    invested: IValue;
    quantity: number;
}
export declare const InvestmentSchema: z.ZodObject<{
    asset: z.ZodString;
    invested: z.ZodObject<{
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
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    asset?: string;
    invested?: {
        value?: number;
        type?: string;
        percentage?: number;
    };
    quantity?: number;
}, {
    asset?: string;
    invested?: {
        value?: number;
        type?: string;
        percentage?: number;
    };
    quantity?: number;
}>;
