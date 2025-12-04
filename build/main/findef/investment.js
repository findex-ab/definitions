"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPotentialInvestmentParents = exports.investmentCanBeParentOf = exports.investmentIsAbove = exports.investmentContains = exports.createInvestmentMap = exports.getInvestmentCurrency = exports.InvestmentSchema = exports.EShareholderType = exports.DateField = void 0;
const docref_1 = require("./docref");
const value_1 = require("./value");
const ss = __importStar(require("superstruct"));
const asset_1 = require("./asset");
const integrationProvider_1 = require("./integrationProvider");
const coInvestor_1 = require("./coInvestor");
const documentId_1 = require("./documentId");
const currency_1 = require("./currency");
const helpers_1 = require("./helpers");
const parseDate = (value) => {
    if (typeof value === 'object' && !!value.getDay)
        return value;
    try {
        if (typeof value === 'string')
            return new Date(Date.parse(value));
        return new Date(value);
    }
    catch (e) {
        console.warn(e);
        return new Date();
    }
};
exports.DateField = ss.coerce(ss.date(), ss.string(), (value) => {
    return parseDate(value);
});
var EShareholderType;
(function (EShareholderType) {
    EShareholderType["ANGEL_INVESTOR"] = "ANGEL_INVESTOR";
    EShareholderType["EMPLOYEE"] = "EMPLOYEE";
    EShareholderType["FOUNDER"] = "FOUNDER";
    EShareholderType["INVESTMENT_COMPANY"] = "INVESTMENT_COMPANY";
    EShareholderType["RETAIL_INVESTOR"] = "RETAIL_INVESTOR";
    EShareholderType["VC"] = "VC";
    EShareholderType["OTHER"] = "OTHER";
})(EShareholderType || (exports.EShareholderType = EShareholderType = {}));
exports.InvestmentSchema = ss.type({
    asset: ss.string(),
    providerImport: ss.optional(ss.any()),
    externalAccountId: ss.optional(ss.string()),
    externalId: ss.optional(ss.string()),
    symbol: ss.optional(ss.string()),
    name: ss.optional(ss.string()),
    externalOrderBookId: ss.optional(ss.string()),
    image: ss.optional(ss.string()),
    userDoesNotWantImage: ss.optional(ss.boolean()),
    currency: ss.optional(ss.string()),
    automation: ss.optional(ss.enums(Object.values(asset_1.EAssetAutomationLevel))),
    provider: ss.optional(ss.type({
        status: ss.optional(ss.enums([
            integrationProvider_1.EProviderSessionStatus.CONNECTED,
            integrationProvider_1.EProviderSessionStatus.DISCONNECTED,
        ])),
        name: ss.optional(ss.string()),
        displayName: ss.optional(ss.string()),
        externalId: ss.optional(ss.number()),
    })),
    invested: value_1.ValueSchema,
    returnValue: ss.optional(value_1.ValueSchema),
    currentValue: ss.optional(value_1.ValueSchema),
    price: ss.optional(value_1.ValueSchema),
    quantity: ss.number(),
    automatic: ss.optional(ss.boolean()),
    time: ss.any(),
    ROI: ss.optional(value_1.ValueSchema),
    acquiredPrice: ss.optional(value_1.ValueSchema),
    lastPrice: ss.optional(value_1.ValueSchema),
    morningPriceTC: ss.optional(value_1.ValueSchema),
    marketValueTC: ss.optional(value_1.ValueSchema),
    marketValueAC: ss.optional(value_1.ValueSchema),
    pctReturn: ss.optional(ss.number()),
    pctToday: ss.optional(ss.number()),
    shareholderType: ss.optional(ss.enums([
        EShareholderType.RETAIL_INVESTOR,
        EShareholderType.ANGEL_INVESTOR,
        EShareholderType.FOUNDER,
        EShareholderType.INVESTMENT_COMPANY,
        EShareholderType.EMPLOYEE,
        EShareholderType.VC,
        EShareholderType.OTHER,
    ])),
    ownedBy: ss.optional(ss.object({
        name: ss.optional(ss.string()),
        organizationNbr: ss.optional(ss.string()),
        companyProfile: ss.optional(ss.union([ss.string(), (0, docref_1.DocRefSchema)()]))
    })),
    coInvestors: ss.optional(ss.array(coInvestor_1.CoInvestorSchema)),
    parentId: ss.optional(documentId_1.DocumentIdSchema),
    childrenIds: ss.optional(ss.array(documentId_1.DocumentIdSchema)),
    liabilities: ss.optional(ss.array(documentId_1.DocumentIdSchema))
});
const getInvestmentCurrency = (investment) => {
    if (investment.lastPrice && typeof investment.lastPrice.type === 'string')
        return investment.lastPrice.type;
    if (investment.asset && typeof investment.asset === 'object')
        return (0, asset_1.getAssetCurrency)(investment.asset);
    return currency_1.CONVERSION_CURRENCY;
};
exports.getInvestmentCurrency = getInvestmentCurrency;
const createInvestmentMap = (investments) => {
    return Object.assign({}, ...investments.map((inv) => ({
        [(0, docref_1.getRefId)(inv)]: inv
    })));
};
exports.createInvestmentMap = createInvestmentMap;
const investmentContains = (investment, other, investments, invMap) => {
    const map = invMap || (0, exports.createInvestmentMap)(investments);
    const invId = (0, docref_1.getRefId)(investment);
    const otherId = (0, docref_1.getRefId)(other);
    if (otherId === invId)
        return true;
    const childIds = investment.childrenIds || [];
    const childInvestments = childIds.map((it) => map[(0, docref_1.getRefId)(it)]).filter(helpers_1.notNullish);
    for (const nextChild of childInvestments) {
        if ((0, docref_1.getRefId)(nextChild) === (0, docref_1.getRefId)(other))
            return true;
        if ((0, exports.investmentContains)(nextChild, other, investments, map)) {
            return true;
        }
    }
    return false;
};
exports.investmentContains = investmentContains;
const investmentIsAbove = (investment, other, investments, invMap) => {
    const map = invMap || (0, exports.createInvestmentMap)(investments);
    const invId = (0, docref_1.getRefId)(investment);
    let nextParent = other.parentId ? map[(0, docref_1.getRefId)(other.parentId)] : null;
    // check all parents
    while (nextParent) {
        if ((0, docref_1.getRefId)(nextParent) === invId)
            return true;
        nextParent = nextParent.parentId ? map[(0, docref_1.getRefId)(nextParent.parentId)] : null;
    }
    return false;
};
exports.investmentIsAbove = investmentIsAbove;
const investmentCanBeParentOf = (potentialParent, child, investments, invMap) => {
    const map = invMap || (0, exports.createInvestmentMap)(investments);
    const parentId = (0, docref_1.getRefId)(potentialParent);
    const childId = (0, docref_1.getRefId)(child);
    if (parentId === childId)
        return false;
    // If it already is a parent of the child, we assume it's OK.
    if (parentId === child.parentId)
        return true;
    // If the child is "above" the parent, then the potential parent can't be a parent.
    if ((0, exports.investmentIsAbove)(child, potentialParent, investments, map))
        return false;
    // If the parent exists within the tree of the child, then false.
    if ((0, exports.investmentContains)(child, potentialParent, investments, map))
        return false;
    return true;
};
exports.investmentCanBeParentOf = investmentCanBeParentOf;
const getPotentialInvestmentParents = (child, investments, invMap) => {
    if (!child) {
        return investments.filter((it) => it.asset.type === asset_1.EAssetType.EQUITY &&
            !it.asset.listed &&
            it.asset.source != asset_1.EAssetSource.IR);
    }
    const map = invMap || (0, exports.createInvestmentMap)(investments);
    return investments.filter((it) => (0, exports.investmentCanBeParentOf)(it, child, investments, map) &&
        it.asset.type === asset_1.EAssetType.EQUITY &&
        !it.asset.listed &&
        it.asset.source != asset_1.EAssetSource.IR);
};
exports.getPotentialInvestmentParents = getPotentialInvestmentParents;
