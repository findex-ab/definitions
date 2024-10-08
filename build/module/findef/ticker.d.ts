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
    price: Number;
    beta: Number;
    volAvg: Number;
    mktCap: Number;
    lastDiv: Number;
    range: string;
    changes: Number;
    companyName: string;
    cik: string;
    isin: string;
    cusip: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    country: string;
    fullTimeEmployees: Number;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    dcfDiff: Number;
    dcf: Number;
    ipoDate: String;
    defaultImage: Boolean;
    isEtf: Boolean;
    isActivelyTrading: Boolean;
    isAdr: Boolean;
    isFund: Boolean;
};
export type IFindexTicker = ITicker & ITickerQuote;
