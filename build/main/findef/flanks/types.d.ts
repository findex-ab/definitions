export type FlanksCreateSession = {
    session: {
        attributes: {
            created_at: string;
            id: string;
            status: string;
            updated_at: string;
            url: string;
        };
        configuration: {
            skip_psd2_notice: boolean;
            connection_id: null;
            connector_id: string;
            context: {};
            expires_at: string;
            labels: null;
            language: string;
            redirect_url: string;
            theme: string;
        };
        connection: {
            connector_id: string;
            id: null;
        };
        error: null;
    };
};
export type FlanksInvestment = {
    _id: string;
    accrued_interest: null | number;
    amount: number;
    analytics: {
        EPS: null | number;
        PER: null | number;
        PES: null | number;
        ROA: null | number;
        ROE: null | number;
        beta_ratio: null | number;
        risk: null | number;
        sharpe_ratio: null | number;
        tracking_error_ratio: null | number;
        volatility: null | number;
    };
    balance: number;
    capital_gain: null | number;
    cnmv: {
        cif_depositaria: null | string;
        cif_gestora: string;
        depositaria: null | string;
        gestora: string;
        isin: string;
        num_registro_depositaria: null | string;
        num_registro_gestora: null | string;
    } | null;
    cost: number | null;
    country_model: null;
    currency: string;
    cusip: null;
    detail: null;
    dgs: {
        cif_gestora: string;
        gestora: string;
    } | null;
    expiration_date: string | null;
    initial_date: string | null;
    interest: {
        benchmark: null;
        rate: number | null;
    } | null;
    is_nominal: boolean;
    isin: string;
    labs: {};
    leverage: null;
    market: null | string;
    name: string;
    operating_market: null;
    performance: null | number;
    performance_detail: {
        HalfYear: null | number;
        InitialToDate: null | number;
        InitialToDateYearly: null | number;
        MTD: null | number;
        QTD: null | number;
        YTD: null | number;
        Yearly: null | number;
    };
    placing_bank: null;
    portfolio_id: string;
    price_ex_cupon: null | number;
    subtype: null | string;
    symbol: string | null;
    type: string;
    valuation_date: string | null;
    updated_at_timestamp: number;
    entity: string;
    external_id: null;
};
export type FlanksSession = {
    attributes: {
        created_at: string;
        id: string;
        status: string;
        updated_at: string;
        url: string;
    };
    configuration: {
        skip_psd2_notice: boolean;
        connection_id: null;
        connector_id: string;
        context: {};
        expires_at: string;
        labels: null;
        language: string;
        redirect_url: string;
        theme: string;
    };
    connection: {
        connector_id: string;
        id: null | string;
    };
    error: null;
};
