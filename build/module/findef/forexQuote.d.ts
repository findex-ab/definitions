export type IForexQuote = {
    tickerFrom: string;
    tickerTo: string;
    bid: number;
    ask: number;
    open: number;
    low: number;
    high: number;
    changes: number;
    date: Date;
};
export declare const ENABLED_FOREX_QUOTES: string[];
