import { DocRefSchema } from './docref';
import { ValueSchema } from './value';
import * as ss from 'superstruct';
import { EProviderSessionStatus } from './integrationProvider';
import { CoInvestorSchema } from './coInvestor';
import { DocumentIdSchema } from './documentId';
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
});
