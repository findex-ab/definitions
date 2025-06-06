import * as ss from 'superstruct';
import { LedgerSchema } from './ledger';
import { DocumentIdSchema } from './documentId';
import { emptyValue } from './value';
import { CONVERSION_CURRENCY } from './currency';
export var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    EAssetType["EQUITY"] = "EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
    EAssetType["CRYPTO"] = "CRYPTO";
    EAssetType["COMMODITY"] = "COMMODITY";
    EAssetType["CASH"] = "CASH";
    EAssetType["DEBT"] = "DEBT";
})(EAssetType || (EAssetType = {}));
export var EAssetSource;
(function (EAssetSource) {
    EAssetSource["IR"] = "IR";
    EAssetSource["AUTOMATIC"] = "AUTOMATIC";
    EAssetSource["MANUAL"] = "MANUAL";
})(EAssetSource || (EAssetSource = {}));
export var EAssetMaintainer;
(function (EAssetMaintainer) {
    EAssetMaintainer["IR"] = "IR";
    EAssetMaintainer["MANUAL"] = "MANUAL";
    EAssetMaintainer["TICKER"] = "TICKER";
    EAssetMaintainer["PROVIDER"] = "PROVIDER";
})(EAssetMaintainer || (EAssetMaintainer = {}));
export var EAssetAutomationLevel;
(function (EAssetAutomationLevel) {
    EAssetAutomationLevel["MANUAL"] = "MANUAL";
    EAssetAutomationLevel["SEMI_AUTOMATIC"] = "SEMI_AUTOMATIC";
    EAssetAutomationLevel["AUTOMATIC"] = "AUTOMATIC";
})(EAssetAutomationLevel || (EAssetAutomationLevel = {}));
export var EAssetSubtype;
(function (EAssetSubtype) {
    // EQUITIES
    EAssetSubtype["STOCK"] = "STOCK";
    EAssetSubtype["STOCK_OPTIONS"] = "STOCK_OPTIONS";
    EAssetSubtype["FUND"] = "FUND";
    EAssetSubtype["BOND"] = "BOND";
    EAssetSubtype["ETF"] = "ETF";
    EAssetSubtype["PENSION"] = "PENSION";
    EAssetSubtype["LOAN"] = "LOAN";
    EAssetSubtype["CERTIFICATE"] = "CERTIFICATE";
    // REAL ESTATE
    EAssetSubtype["APARTMENT"] = "APARTMENT";
    EAssetSubtype["HOUSE"] = "HOUSE";
    EAssetSubtype["BUILDING"] = "BUILDING";
    EAssetSubtype["PARKING"] = "PARKING";
    EAssetSubtype["COMMERCIAL"] = "COMMERCIAL";
    // ALTERNATIVES
    EAssetSubtype["CRYPTO"] = "CRYPTO";
    EAssetSubtype["NFT"] = "NFT";
    EAssetSubtype["COMMODITY"] = "COMMODITY";
    EAssetSubtype["WATCH"] = "WATCH";
    EAssetSubtype["JEWELLRY"] = "JEWELLRY";
    EAssetSubtype["GEMSTONE"] = "GEMSTONE";
    EAssetSubtype["LAND"] = "LAND";
    EAssetSubtype["CAR"] = "CAR";
    EAssetSubtype["BOAT"] = "BOAT";
    EAssetSubtype["ART"] = "ART";
    EAssetSubtype["FOREST_INVESTMENT"] = "FOREST_INVESTMENT";
    EAssetSubtype["WINE"] = "WINE";
    EAssetSubtype["SNEAKERS"] = "SNEAKERS";
    EAssetSubtype["PRIVATE_DEBT"] = "PRIVATE_DEBT";
    EAssetSubtype["PRIVATE_EQUITY"] = "PRIVATE_EQUITY";
    EAssetSubtype["HEDGE_FUND"] = "HEDGE_FUND";
    EAssetSubtype["COLLECTIBLE"] = "COLLECTIBLE";
    EAssetSubtype["SAVINGS_ACCOUNT"] = "SAVINGS_ACCOUNT";
    EAssetSubtype["CHECKING_ACCOUNT"] = "CHECKING_ACCOUNT";
    EAssetSubtype["INVESTMENT_ACCOUNT"] = "INVESTMENT_ACCOUNT";
    EAssetSubtype["BANK_ACCOUNT"] = "BANK_ACCOUNT";
    EAssetSubtype["NO_ACCOUNT"] = "NO_ACCOUNT";
    EAssetSubtype["CASH"] = "CASH";
    EAssetSubtype["OTHER"] = "OTHER";
    EAssetSubtype["WEB_DOMAIN"] = "WEB_DOMAIN";
})(EAssetSubtype || (EAssetSubtype = {}));
export var EAssetIndustry;
(function (EAssetIndustry) {
    EAssetIndustry["AGRICULTURE"] = "AGRICULTURE";
    EAssetIndustry["AUTOMOTIVE"] = "AUTOMOTIVE";
    EAssetIndustry["BANKING"] = "BANKING";
    EAssetIndustry["BIOTECHNOLOGY"] = "BIOTECHNOLOGY";
    EAssetIndustry["CONSTRUCTION"] = "CONSTRUCTION";
    EAssetIndustry["CONSUMER_GOODS"] = "CONSUMER_GOODS";
    EAssetIndustry["EDUCATION"] = "EDUCATION";
    EAssetIndustry["ENERGY"] = "ENERGY";
    EAssetIndustry["ENTERTAINMENT"] = "ENTERTAINMENT";
    EAssetIndustry["FINANCIAL_SERVICES"] = "FINANCIAL_SERVICES";
    EAssetIndustry["FINTECH"] = "FINTECH";
    EAssetIndustry["FOOD_BEVERAGE"] = "FOOD_BEVERAGE";
    EAssetIndustry["GOVERNMENT"] = "GOVERNMENT";
    EAssetIndustry["HEALTHCARE"] = "HEALTHCARE";
    EAssetIndustry["HOSPITALITY"] = "HOSPITALITY";
    EAssetIndustry["INFORMATION_TECHNOLOGY"] = "INFORMATION_TECHNOLOGY";
    EAssetIndustry["INSURANCE"] = "INSURANCE";
    EAssetIndustry["MANUFACTURING"] = "MANUFACTURING";
    EAssetIndustry["MEDIA"] = "MEDIA";
    EAssetIndustry["MINING"] = "MINING";
    EAssetIndustry["PHARMACEUTICAL"] = "PHARMACEUTICAL";
    EAssetIndustry["PROPTECH"] = "PROPTECH";
    EAssetIndustry["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetIndustry["RETAIL"] = "RETAIL";
    EAssetIndustry["TELECOMMUNICATIONS"] = "TELECOMMUNICATIONS";
    EAssetIndustry["TRANSPORTATION"] = "TRANSPORTATION";
    EAssetIndustry["UTILITIES"] = "UTILITIES";
})(EAssetIndustry || (EAssetIndustry = {}));
export const AssetSchema = ss.type({
    name: ss.string(),
    providerImport: ss.optional(ss.any()),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: LedgerSchema,
    listed: ss.optional(ss.boolean()),
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    uid: ss.optional(ss.string()),
    type: ss.optional(ss.enums(Object.keys(EAssetType))),
    subtypes: ss.optional(ss.array(ss.enums(Object.keys(EAssetSubtype)))),
    tags: ss.optional(ss.array(ss.string())),
    searchTags: ss.optional(ss.array(ss.string())),
    isBankAccount: ss.optional(ss.boolean()),
    source: ss.optional(ss.enums(Object.keys(EAssetSource))),
    maintained: ss.optional(ss.enums(Object.keys(EAssetMaintainer))),
    provider: ss.optional(ss.string()),
    symbol: ss.optional(ss.string()),
    parent: ss.optional(DocumentIdSchema),
    children: ss.optional(ss.array(DocumentIdSchema)),
    automatic: ss.optional(ss.boolean()),
    articles: ss.optional(ss.array(ss.any())),
    lastNewsUpdate: ss.optional(ss.any()),
    image: ss.optional(ss.string()),
    automaticLogoFailed: ss.optional(ss.boolean()),
    realEstateInformation: ss.optional(ss.object({
        type: ss.optional(ss.string()),
        country: ss.optional(ss.string()),
        city: ss.optional(ss.string()),
        address: ss.optional(ss.string()),
    })),
    realEstateType: ss.optional(ss.string()),
    country: ss.optional(ss.string()),
    city: ss.optional(ss.string()),
    address: ss.optional(ss.string()),
    assetAdmins: ss.optional(ss.array(DocumentIdSchema)),
    currency: ss.optional(ss.string()),
    interest: ss.optional(ss.number()),
    createdBy: ss.optional(ss.string()),
    description: ss.optional(ss.string()),
    ticker: ss.optional(DocumentIdSchema),
    cryptoQuote: ss.optional(DocumentIdSchema)
});
export const emptyAsset = {
    _id: '____',
    name: '',
    contactEmail: '',
    ledger: {
        sharesIssued: 0,
        sharePrice: emptyValue,
    },
    listed: false,
};
export const assetTypeCanBeListedAndUnlisted = (assetType) => {
    return [EAssetType.EQUITY].includes(assetType);
};
export const assetHasAutomaticTicker = (asset) => {
    if (asset.companyProfile && typeof asset.companyProfile === 'object') {
        const companyProfile = asset.companyProfile;
        if (companyProfile.manuallyAdded)
            return false;
    }
    if (asset.commodityQuote && typeof asset.commodityQuote === 'object') {
        const commodity = asset.commodityQuote;
        if (commodity.manuallyAdded)
            return false;
    }
    if (asset.cryptoQuote && typeof asset.cryptoQuote === 'object') {
        const crypto = asset.cryptoQuote;
        if (crypto.manuallyAdded)
            return false;
    }
    if (asset.ticker ||
        asset.provider ||
        asset.providerImport ||
        asset.listed === true ||
        asset.type === EAssetType.COMMODITY ||
        asset.type === EAssetType.CRYPTO ||
        asset.cryptoQuote)
        return true;
    if (asset.companyProfile) {
        if (typeof asset.companyProfile === 'object') {
            const profile = asset.companyProfile;
            if (profile.manuallyAdded === true || profile.listed === false)
                return false;
            return true;
        }
    }
    return false;
};
export const getAssetMaintainedType = (asset) => {
    if (asset.maintained)
        return asset.maintained;
    if (asset.companyProfile && typeof asset.companyProfile === 'object') {
        const companyProfile = asset.companyProfile;
        if (companyProfile.manuallyAdded)
            return EAssetMaintainer.MANUAL;
        return EAssetMaintainer.TICKER;
    }
    if (asset.commodityQuote && typeof asset.commodityQuote === 'object') {
        const commodity = asset.commodityQuote;
        if (commodity.manuallyAdded)
            return EAssetMaintainer.MANUAL;
        return EAssetMaintainer.TICKER;
    }
    if (asset.cryptoQuote && typeof asset.cryptoQuote === 'object') {
        const crypto = asset.cryptoQuote;
        if (crypto.manuallyAdded)
            return EAssetMaintainer.MANUAL;
        return EAssetMaintainer.TICKER;
    }
    if (asset.type === EAssetType.COMMODITY)
        return EAssetMaintainer.TICKER;
    if (asset.provider || asset.providerImport)
        return EAssetMaintainer.PROVIDER;
    if (asset.cryptoQuote)
        return EAssetMaintainer.TICKER;
    if (asset.companyProfile && typeof asset.companyProfile === 'object') {
        const profile = asset.companyProfile;
        if (profile.listed)
            return EAssetMaintainer.TICKER;
    }
    return EAssetMaintainer.MANUAL;
};
export const getAssetMaintainedText = (asset) => {
    const maintained = getAssetMaintainedType(asset);
    switch (maintained) {
        case EAssetMaintainer.IR: return 'Investor Relations';
        case EAssetMaintainer.PROVIDER: return 'Provider';
        case EAssetMaintainer.TICKER: return 'Ticker';
        default:
        case EAssetMaintainer.MANUAL: return 'Manual';
    }
};
export const getAssetCurrency = (asset) => {
    if (asset.ledger && asset.ledger.sharePrice && typeof asset.ledger.sharePrice.type === 'string')
        return asset.ledger.sharePrice.type;
    const companyProfile = asset.companyProfile;
    if (companyProfile && typeof companyProfile === 'object') {
        if (typeof companyProfile.currency === 'string')
            return companyProfile.currency;
    }
    const crypto = asset.cryptoQuote;
    if (crypto && typeof crypto === 'object') {
        if (typeof crypto.tickerFrom === 'string')
            return crypto.tickerFrom;
    }
    if (typeof asset.currency === 'string')
        return asset.currency;
    return CONVERSION_CURRENCY;
};
export const evaluateAssetAutomationLevel = (asset) => {
    if (asset.commodityQuote) {
        if (asset.commodityQuote.manuallyAdded)
            return EAssetAutomationLevel.MANUAL;
        return EAssetAutomationLevel.SEMI_AUTOMATIC;
    }
    if (asset.cryptoQuote) {
        if (asset.cryptoQuote.manuallyAdded)
            return EAssetAutomationLevel.MANUAL;
        return EAssetAutomationLevel.SEMI_AUTOMATIC;
    }
    if (asset.companyProfile) {
        if (asset.companyProfile.manuallyAdded || (asset.companyProfile.isActivelyTrading !== true))
            return EAssetAutomationLevel.MANUAL;
        return EAssetAutomationLevel.SEMI_AUTOMATIC;
    }
    if (asset.provider || asset.providerImport)
        return EAssetAutomationLevel.AUTOMATIC;
    return EAssetAutomationLevel.MANUAL;
};
