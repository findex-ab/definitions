import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
export type ICompany = {
    symbol: string;
    price: number;
    beta: number;
    volAvg: number;
    mktCap: number;
    lastDiv: number;
    range: string;
    changes: number;
    name: string;
    currency: string;
    cik?: string;
    isin: string;
    cusip?: string;
    exchange: string;
    exchangeShortName: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    country: string;
    fullTimeEmployees: number;
    phone: string;
    address: string;
    city: string;
    state?: string;
    zip: string;
    dcfDiff: number;
    dcf: number;
    image: TDocRef<IAttachment>;
    ipoDate: Date;
    defaultImage: boolean;
    isEtf: boolean;
    isActivelyTrading: boolean;
    isAdr: boolean;
    isFund: boolean;
};
