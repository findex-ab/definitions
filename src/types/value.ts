import z from "zod";

export interface IValue {
  value: number;
  percentage?: number;
  type?: string;
}

export const doSomething = (value: IValue): number => value.value;

export const ValueSchema = z.object({
  value: z.number(),
  type: z.string().optional(),
  percentage: z.number().optional(),
});
