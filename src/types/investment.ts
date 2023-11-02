import { TDocRef } from "./docref";
import { IValue, ValueSchema } from "./value";
import z from 'zod';
import { IAsset } from "./asset";

export interface IInvestment {
  asset: TDocRef<IAsset>;
  invested: IValue;
  quantity: number;
}

export const InvestmentSchema = z.object({
    asset: z.string(),
    invested: ValueSchema,
    quantity: z.number()
})
