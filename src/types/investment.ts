import { TDocRef } from "./docref";
import { IValue, ValueSchema } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";

const parseDate = (value: Date | string | number): Date => {
  if (typeof value === 'object') return value;
  if (typeof value === 'string') return new Date(Date.parse(value));
  return new Date(value);
}

const DateField = ss.coerce(ss.date(), ss.string(), (value) => {
  return parseDate(value);
});

export interface IInvestment {
  asset: TDocRef<IAsset>;
  invested: IValue;
  quantity: number;
  time?: Date;
}

export const InvestmentSchema = ss.type({
  asset: ss.string(),
  invested: ValueSchema,
  quantity: ss.number(),
  time: ss.optional(DateField)
})
