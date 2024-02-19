import { TDocRef } from "./docref";
import { IValue, ValueSchema } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";

const parseDate = (value: Date | string | number): Date => {
  if (typeof value === 'object' && !!value.getDay) return value;
  try {
    if (typeof value === 'string') return new Date(Date.parse(value));
    return new Date(value);
  } catch (e) {
    console.warn(e);
    return new Date();
  }
}

const DateField = ss.coerce(ss.date(), ss.string(), (value) => {
  return parseDate(value);
});

export interface IInvestment {
  asset: TDocRef<IAsset>;
  invested: IValue;
  returnValue?: IValue,
  price?: IValue;
  quantity: number;
  automatic?: boolean;
  time?: Date;
}

export const InvestmentSchema = ss.type({
  asset: ss.string(),
  invested: ValueSchema,
  returnValue: ss.optional(ValueSchema),
  price: ss.optional(ValueSchema),
  quantity: ss.number(),
  automatic: ss.optional(ss.boolean()),
  time: ss.any()
})
