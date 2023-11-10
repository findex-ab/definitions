import ss from "superstruct";

export interface IValue {
  value: number;
  percentage?: number;
  type?: string;
}

export const ValueSchema: ss.Describe<IValue> = ss.object({
  value: ss.number(),
  type: ss.optional(ss.string()),
  percentage: ss.optional(ss.number()),
});
