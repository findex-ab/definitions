export interface priceUpdates {
  id: string;
  price: {
    amount: {
      quantity: number;
      negative: boolean;
      zero: boolean;
    };
    currency: string;
    negative: boolean;
    sek: boolean;
  };
  date: string;
  source: string;
}

export interface ICoreAsset {
  id: string;
  price: number;
  currency: string;
  name: string;
  assetType: string;
  lastUpdated: {
    time: string;
    source: string;
  };
  organizationNumber?: number,
  specifics: {
    priceUpdates: Array<priceUpdates>;
  };
}
