import * as ss from "superstruct";

export interface IValue {
  value: number;
  percentage?: number;
  type?: string;
  time?: Date;
  __isValue?: boolean;
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

export const isValue = (x: any): x is IValue => {
  if (!x) return false;
  if (typeof x !== 'object') return false;
  return (typeof x.value === 'number' && typeof x.type === 'string') || x.__isValue === true;
}
