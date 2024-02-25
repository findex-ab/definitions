export type InvestmentOrder = {
    internalId: string;
    type: string;
    side: string;
    created: string;
    tradedPrice: {
        amt: number;
        cy: string;
    };
    amount: {
        amt: number;
        cy: string;
    };
    quantity: number;
    validityType: string;
    validUntil: string;
    isUpdatable: boolean;
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
    status: string;
};
