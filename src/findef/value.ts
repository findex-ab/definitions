import * as ss from "superstruct";

export interface IValue {
  value: number;
  percentage?: number;
  type?: string;
  time?: Date;
}

export const ValueSchema: ss.Describe<IValue> = ss.type({
  value: ss.number(),
  type: ss.optional(ss.string()),
  percentage: ss.optional(ss.number()),
  time: ss.any()
});

export const emptyValue: IValue = {
  value: 0,
  percentage: 0,
  type: 'SEK',
  time: new Date()
}
