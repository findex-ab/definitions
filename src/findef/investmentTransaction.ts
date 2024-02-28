import { DocumentId } from "./documentId";

export type ProviderInvestmentTransaction = {
  internalId: string;
  type: string;
  providerType: string;
  commissionTC: {
    amt: number;
    cy: string;
  };
  foreignTaxRate: number;
  tradedPriceTC: {
    amt: number;
    cy: string;
  };
  unitPriceAC: {
    amt: number;
    cy: string;
  };
  amountAC: {
    amt: number;
    cy: string;
  };
  businessDate: string;
  settlementDate: string;
  quantity: number;
  interest: number;
  message: string;
  instrument: {
    isin: string;
    internalId: string;
    name: string;
    symbol: string;
    type: string;
    groupType: string;
    marketId: string;
    mic: string;
    internalType: string;
    assetClass: string;
    currency: string;
    lastPrice: {
      amt: number;
      cy: string;
    };
    marketCap: {
      amt: number;
      cy: string;
    };
    sector: string;
    sectorGroup: string;
    collateralValue: number;
    productFee: number;
    raw: string;
  };
  chargesAC: {
    amt: number;
    cy: string;
  };
  trxDetailsExist: boolean;
  raw: string;
};

export type InvestmentTransaction = Omit<ProviderInvestmentTransaction, 'internalId'> & {
  user?: DocumentId;
  externalId: string;
}
