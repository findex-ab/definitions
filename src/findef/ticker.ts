import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { ITickerQuote } from "./tickerQuote";

export type ITicker = {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
  image?: TDocRef<IAttachment>;
  imageSource?: string;
  price: number;
  beta: number;
  volAvg: number;
  mktCap: number;
  lastDiv: number;
  range: string;
  changes: number;
  companyName: string;
  cik: string;
  isin: string;
  cusip: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  ceo: string,
  sector: string,
  country: string,
  fullTimeEmployees: number,
  phone: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  dcfDiff: number,
  dcf: number,
  ipoDate: String,
  defaultImage: boolean,
  isEtf: boolean,
  isActivelyTrading: boolean,
  isAdr: boolean,
  isFund: boolean
}

export type IFindexTicker = ITicker & ITickerQuote;
