import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";

export type IStock = {
  symbol: string;
  name: string;
  change: number;
  price: number;
  changesPercentage: number;
  exchange: string;
  exchangeShortName: string;
  stockType: string;
  searchPrio: number;
  image?: TDocRef<IAttachment>;
  isin?: string;
  currency?: string;
};
