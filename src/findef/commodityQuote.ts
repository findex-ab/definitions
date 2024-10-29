import { TDocRef } from "./docref"
import { IUser } from "./user"

export type ICommodityQuote = {
  symbol: string
  name: string
  price: number
  changesPercentage: number
  change: number
  dayLow: number
  dayHigh: number
  yearHigh: number
  yearLow: number
  marketCap: any
  priceAvg50: number
  priceAvg200: number
  exchange: string
  volume: number
  avgVolume: number
  open: number
  previousClose: number
  eps: any
  pe: any
  earningsAnnouncement: any
  sharesOutstanding: any
  timestamp: number
  manuallyAdded?: boolean;
  createdBy?: TDocRef<IUser>;
}
