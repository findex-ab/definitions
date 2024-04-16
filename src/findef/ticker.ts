import { ITickerQuote } from "./tickerQuote";

export type ITicker = {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

export type IFindexTicker = ITicker & ITickerQuote;
