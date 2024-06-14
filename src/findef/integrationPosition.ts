export interface IntegrationPosition {
  quantity: number
  acquiredPrice: IntegrationPositionAcquiredPrice
  lastPrice: IntegrationPositionLastPrice
  morningPriceTC: IntegrationPositionMorningPriceTc
  marketValueTC: IntegrationPositionMarketValueTc
  marketValueAC: IntegrationPositionMarketValueAc
  currency: string
  pctReturn: number
  pctToday: number
  instrument: IntegrationPositionInstrument,
  provider?: string;
  raw?: {
    id?: string;
  }
}

export interface IntegrationPositionAcquiredPrice {
  amt: number
  cy: string
}

export interface IntegrationPositionLastPrice {
  amt: number
  cy: string
}

export interface IntegrationPositionMorningPriceTc {
  amt: number
  cy: string
}

export interface IntegrationPositionMarketValueTc {
  amt: number
  cy: string
}

export interface IntegrationPositionMarketValueAc {
  amt: number
  cy: string
}

export interface IntegrationPositionInstrument {
  isin: string
  internalId: string
  name: string
  symbol: string
  type: string
  mic: string
  internalType: string
  currency: string
  lastPrice: IntegrationPositionLastPrice2
  marketCap: IntegrationPositionMarketCap
  raw: IntegrationPositionRaw
}

export interface IntegrationPositionLastPrice2 {
  amt: number
  cy: string
}

export interface IntegrationPositionMarketCap {
  amt: number
  cy: string
}

export interface IntegrationPositionRaw {
  orderbookId: string
  name: string
  isin: string
  instrumentId: string
  sectors: IntegrationPositionSector[]
  tradable: string
  listing: IntegrationPositionListing
  historicalClosingPrices: IntegrationPositionHistoricalClosingPrices
  keyIndicators: IntegrationPositionKeyIndicators
  quote: IntegrationPositionQuote
  type: string;
  id?: string;
}

export interface IntegrationPositionSector {
  sectorId: string
  sectorName: string
}

export interface IntegrationPositionListing {
  shortName: string
  tickerSymbol: string
  countryCode: string
  currency: string
  marketPlaceCode: string
  marketPlaceName: string
  tickSizeListId: string
  marketTradesAvailable: boolean
}

export interface IntegrationPositionHistoricalClosingPrices {
  oneDay: number
  oneWeek: number
  oneMonth: number
  threeMonths: number
  startOfYear: number
  oneYear: number
  threeYears: number
  fiveYears: number
  start: number
  startDate: string
}

export interface IntegrationPositionKeyIndicators {
  numberOfOwners: number
  directYield: number
  volatility: number
  beta: number
  priceEarningsRatio: number
  priceSalesRatio: number
  interestCoverageRatio: number
  returnOnEquity: number
  returnOnTotalAssets: number
  equityRatio: number
  capitalTurnover: number
  operatingProfitMargin: number
  grossMargin: number
  netMargin: number
  marketCapital: IntegrationPositionMarketCapital
  equityPerShare: IntegrationPositionEquityPerShare
  turnoverPerShare: IntegrationPositionTurnoverPerShare
  earningsPerShare: IntegrationPositionEarningsPerShare
  dividend: IntegrationPositionDividend
  dividendsPerYear: number
  previousReport: IntegrationPositionPreviousReport
}

export interface IntegrationPositionMarketCapital {
  value: number
  currency: string
}

export interface IntegrationPositionEquityPerShare {
  value: number
  currency: string
}

export interface IntegrationPositionTurnoverPerShare {
  value: number
  currency: string
}

export interface IntegrationPositionEarningsPerShare {
  value: number
  currency: string
}

export interface IntegrationPositionDividend {
  exDate: string
  paymentDate: string
  amount: number
  currencyCode: string
  exDateStatus: string
}

export interface IntegrationPositionPreviousReport {
  date: string
  reportType: string
}

export interface IntegrationPositionQuote {
  buy: number
  sell: number
  last: number
  highest: number
  lowest: number
  change: number
  changePercent: number
  spread: number
  timeOfLast: number
  totalValueTraded: number
  totalVolumeTraded: number
  updated: number
  volumeWeightedAveragePrice: number
}

export const getPositionId = (pos: IntegrationPosition): string => {
  const name = pos.instrument?.name ? pos.instrument.name.toLowerCase() : undefined;
  const ids = [pos.instrument?.internalId, pos.instrument?.isin, name, pos.instrument?.mic, pos.instrument?.symbol].filter(it => !!it) as string[];
  return ids.map(id => id.trim().replace(' ', '')).join('_');
}
