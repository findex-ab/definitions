import { DocRefSchema, getRefId } from './docref';
import { ValueSchema } from './value';
import * as ss from 'superstruct';
import { EAssetAutomationLevel, EAssetSource, EAssetType, getAssetCurrency } from './asset';
import { EProviderSessionStatus } from './integrationProvider';
import { CoInvestorSchema } from './coInvestor';
import { DocumentIdSchema } from './documentId';
import { CONVERSION_CURRENCY } from './currency';
import { notNullish } from './helpers';
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
export const DateField = ss.coerce(ss.date(), ss.string(), (value) => {
    return parseDate(value);
});
export var EShareholderType;
(function (EShareholderType) {
    EShareholderType["ANGEL_INVESTOR"] = "ANGEL_INVESTOR";
    EShareholderType["EMPLOYEE"] = "EMPLOYEE";
    EShareholderType["FOUNDER"] = "FOUNDER";
    EShareholderType["INVESTMENT_COMPANY"] = "INVESTMENT_COMPANY";
    EShareholderType["RETAIL_INVESTOR"] = "RETAIL_INVESTOR";
    EShareholderType["VC"] = "VC";
    EShareholderType["OTHER"] = "OTHER";
})(EShareholderType || (EShareholderType = {}));
export const InvestmentSchema = ss.type({
    asset: ss.string(),
    providerImport: ss.optional(ss.any()),
    externalAccountId: ss.optional(ss.string()),
    externalId: ss.optional(ss.string()),
    symbol: ss.optional(ss.string()),
    externalOrderBookId: ss.optional(ss.string()),
    image: ss.optional(ss.string()),
    userDoesNotWantImage: ss.optional(ss.boolean()),
    currency: ss.optional(ss.string()),
    automation: ss.optional(ss.enums(Object.values(EAssetAutomationLevel))),
    provider: ss.optional(ss.type({
        status: ss.optional(ss.enums([
            EProviderSessionStatus.CONNECTED,
            EProviderSessionStatus.DISCONNECTED,
        ])),
        name: ss.optional(ss.string()),
        displayName: ss.optional(ss.string()),
        externalId: ss.optional(ss.number()),
    })),
    invested: ValueSchema,
    returnValue: ss.optional(ValueSchema),
    currentValue: ss.optional(ValueSchema),
    price: ss.optional(ValueSchema),
    quantity: ss.number(),
    automatic: ss.optional(ss.boolean()),
    time: ss.any(),
    ROI: ss.optional(ValueSchema),
    acquiredPrice: ss.optional(ValueSchema),
    lastPrice: ss.optional(ValueSchema),
    morningPriceTC: ss.optional(ValueSchema),
    marketValueTC: ss.optional(ValueSchema),
    marketValueAC: ss.optional(ValueSchema),
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
        companyProfile: ss.optional(ss.union([ss.string(), DocRefSchema()]))
    })),
    coInvestors: ss.optional(ss.array(CoInvestorSchema)),
    parentId: ss.optional(DocumentIdSchema),
    childrenIds: ss.optional(ss.array(DocumentIdSchema)),
    liabilities: ss.optional(ss.array(DocumentIdSchema))
});
export const getInvestmentCurrency = (investment) => {
    if (investment.lastPrice && typeof investment.lastPrice.type === 'string')
        return investment.lastPrice.type;
    if (investment.asset && typeof investment.asset === 'object')
        return getAssetCurrency(investment.asset);
    return CONVERSION_CURRENCY;
};
export const createInvestmentMap = (investments) => {
    return Object.assign({}, ...investments.map((inv) => ({
        [getRefId(inv)]: inv
    })));
};
export const investmentContains = (investment, other, investments, invMap) => {
    const map = invMap || createInvestmentMap(investments);
    const invId = getRefId(investment);
    const otherId = getRefId(other);
    if (otherId === invId)
        return true;
    const childIds = investment.childrenIds || [];
    const childInvestments = childIds.map((it) => map[getRefId(it)]).filter(notNullish);
    for (const nextChild of childInvestments) {
        if (getRefId(nextChild) === getRefId(other))
            return true;
        if (investmentContains(nextChild, other, investments, map)) {
            return true;
        }
    }
    return false;
};
export const investmentIsAbove = (investment, other, investments, invMap) => {
    const map = invMap || createInvestmentMap(investments);
    const invId = getRefId(investment);
    let nextParent = other.parentId ? map[getRefId(other.parentId)] : null;
    // check all parents
    while (nextParent) {
        if (getRefId(nextParent) === invId)
            return true;
        nextParent = nextParent.parentId ? map[getRefId(nextParent.parentId)] : null;
    }
    return false;
};
export const investmentCanBeParentOf = (potentialParent, child, investments, invMap) => {
    const map = invMap || createInvestmentMap(investments);
    const parentId = getRefId(potentialParent);
    const childId = getRefId(child);
    if (parentId === childId)
        return false;
    // If it already is a parent of the child, we assume it's OK.
    if (parentId === child.parentId)
        return true;
    // If the child is "above" the parent, then the potential parent can't be a parent.
    if (investmentIsAbove(child, potentialParent, investments, map))
        return false;
    // If the parent exists within the tree of the child, then false.
    if (investmentContains(child, potentialParent, investments, map))
        return false;
    return true;
};
export const getPotentialInvestmentParents = (child, investments, invMap) => {
    if (!child) {
        return investments.filter((it) => it.asset.type === EAssetType.EQUITY &&
            !it.asset.listed &&
            it.asset.source != EAssetSource.IR);
    }
    const map = invMap || createInvestmentMap(investments);
    return investments.filter((it) => investmentCanBeParentOf(it, child, investments, map) &&
        it.asset.type === EAssetType.EQUITY &&
        !it.asset.listed &&
        it.asset.source != EAssetSource.IR);
};
