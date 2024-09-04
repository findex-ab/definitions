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
};
export type IFindexTicker = ITicker & ITickerQuote;
