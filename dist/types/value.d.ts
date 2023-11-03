import z from "zod";
export interface IValue {
    value: number;
    percentage?: number;
    type?: string;
}
export declare const doSomething: (value: IValue) => number;
export declare const ValueSchema: z.ZodObject<{
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
