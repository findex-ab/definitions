export type ICompleteIntegrationPosition = {
  quantity: number;
  acquiredPrice: {
    amt: number;
    cy: string;
  };
  lastPrice?: {
    amt: number;
    cy: string;
  };
  morningPriceTC?: {
    amt: number;
    cy?: string;
  };
  marketValueTC: {
    amt: number;
    cy?: string;
  };
  marketValueAC: {
    amt: number;
    cy: string;
  };
  currency: string;
  pctReturn?: number;
  pctToday?: number;
  instrument: {
    isin: string;
    id?: string;
    internalId?: string;
    name: string;
    symbol?: string;
    type: string;
    mic?: string;
    internalType: string;
    currency?: string;
    raw?: {
      orderbookId: string;
      name: string;
      isin: string;
      instrumentId: string;
      sectors: Array<{
        sectorId: string;
        sectorName: string;
      }>;
      tradable: string;
      listing: {
        shortName: string;
        tickerSymbol: string;
        countryCode: string;
        currency: string;
        marketPlaceCode: string;
        marketPlaceName: string;
        tickSizeListId: string;
        marketTradesAvailable: boolean;
        marketListName?: string;
      };
      historicalClosingPrices: {
        oneDay: number;
        oneWeek: number;
        oneMonth: number;
        threeMonths: number;
        startOfYear: number;
        oneYear: number;
        threeYears?: number;
        fiveYears?: number;
        start: number;
        startDate: string;
        tenYears?: number;
      };
      keyIndicators: {
        numberOfOwners: number;
        directYield?: number;
        volatility?: number;
        beta?: number;
        priceEarningsRatio?: number;
        priceSalesRatio?: number;
        interestCoverageRatio?: number;
        returnOnEquity?: number;
        returnOnTotalAssets?: number;
        equityRatio?: number;
        capitalTurnover?: number;
        operatingProfitMargin?: number;
        grossMargin?: number;
        netMargin?: number;
        marketCapital?: {
          value: number;
          currency: string;
        };
        equityPerShare?: {
          value: number;
          currency: string;
        };
        turnoverPerShare?: {
          value: number;
          currency: string;
        };
        earningsPerShare?: {
          value: number;
          currency: string;
        };
        dividend?: {
          exDate: string;
          paymentDate?: string;
          amount: number;
          currencyCode: string;
          exDateStatus: string;
        };
        dividendsPerYear: number;
        previousReport?: {
          date: string;
          reportType: string;
        };
        reportDate?: string;
        nextReport?: {
          date: string;
          reportType: string;
        };
      };
      quote: {
        buy?: number;
        sell?: number;
        last: number;
        highest?: number;
        lowest?: number;
        change: number;
        changePercent: number;
        spread?: number;
        timeOfLast: number;
        totalValueTraded: number;
        totalVolumeTraded: number;
        updated: number;
        volumeWeightedAveragePrice?: number;
      };
      type: string;
    };
    marketCap?: {
      amt: number;
      cy: string;
    };
    lastPrice?: {
      amt: number;
      cy: string;
    };
  };
  raw: {
    account?: {
      id: string;
      type: string;
      name: string;
      urlParameterId: string;
      hasCredit: boolean;
    };
    instrument?: {
      id?: string;
      type: string;
      name: string;
      orderbook?: {
        id: string;
        flagCode?: string;
        name: string;
        type: string;
        tradeStatus: string;
        quote: {
          highest?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          lowest?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          buy?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          sell?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          latest: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          change: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          changePercent: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          updated: string;
        };
        turnover: {
          volume: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
          value?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
          };
        };
        lastDeal: {
          date: string;
          time?: string;
        };
      };
      currency: string;
      isin: string;
      volumeFactor: number;
    };
    volume?: {
      value: number;
      unit: string;
      unitType: string;
      decimalPrecision: number;
    };
    value?: {
      value: number;
      unit: string;
      unitType: string;
      decimalPrecision: number;
    };
    averageAcquiredPrice?: {
      value: number;
      unit: string;
      unitType: string;
      decimalPrecision: number;
    };
    acquiredValue?: {
      value: number;
      unit: string;
      unitType: string;
      decimalPrecision: number;
    };
    lastTradingDayPerformance?: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    id?: string;
    display_country_code?: string;
    country_name?: string;
    sustainable_selection?: boolean;
    position_key?: string;
    name?: string;
    instrument_key?: string;
    instrument_type?: string;
    detailed_type?: string;
    currency?: string;
    custody_key?: string;
    custody_name?: string;
    avg_purchase_price?: number;
    unrealized_profit_loss?: number;
    unrealized_profit_loss_pct?: number;
    profit_loss_applicable?: boolean;
    quantity?: number;
    price?: number;
    price_timestamp?: string;
    todays_change?: number;
    todays_change_pct?: number;
    market_value_in_base_currency?: number;
    market_value?: number;
    purchase_value?: number;
    nominal?: boolean;
    buy_allowed?: boolean;
    sell_allowed?: boolean;
    switch_allowed?: boolean;
    details_available?: boolean;
    tags?: Array<string>;
    owned_by_customer?: boolean;
    owner_name?: string;
    owner_id?: string;
    account_number?: string;
    account_key_encrypted?: string;
    has_incomplete_data?: boolean;
    notes?: Array<any>;
    isin?: string;
    market?: string;
    price_factor?: number;
    fx_rate?: number;
    base_currency?: string;
    logo_available?: boolean;
    price_precision?: number;
    units_precision?: number;
    classification?: string;
  };
};
