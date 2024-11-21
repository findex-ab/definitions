export type IForexQuote = {
  tickerFrom: string;
  tickerTo: string;
  bid: number;//"1.07419",
  ask: number;//"1.07464",
  open: number;//"1.07434",
  low: number;//"1.0723",
  high: number;//"1.07562",
  changes: number;//0.0000704,
  date: Date;
}

export const ENABLED_FOREX_QUOTES = [
  "SEK",
  "USD",
  "CAD",
  "NZD",
  "EUR",
  "GBP",
  "NOK",
  "DKK",
  "AUD",
  "LBP",
  "TRY",
  "UAH",
  "RUB",
  "LEK",
  "BAM",
  "INR"
]
