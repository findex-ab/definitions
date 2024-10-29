import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IUser } from "./user";

export type ICryptoQuote = {
  tickerFrom: string;
  tickerTo: string;
  symbol: string
  name: string
  prettyName: string;
  prettySymbol: string;
  searchPrio: number;
  price: number
  avgPrice: number;
  changesPercentage: number
  change: number
  dayLow: number
  dayHigh: number
  yearHigh: number
  yearLow: number
  marketCap: number
  priceAvg50: number
  priceAvg200: number
  volume: number
  avgVolume: number
  exchange: string
  open: number
  previousClose: number
  eps?: any
  pe?: any
  earningsAnnouncement?: any
  sharesOutstanding: number
  timestamp: number;
  image?: TDocRef<IAttachment>;
  manuallyAdded?: boolean;
  createdBy?: TDocRef<IUser>;
}
