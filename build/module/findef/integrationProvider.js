import * as ss from 'superstruct';
export var EProviderType;
(function (EProviderType) {
    EProviderType["RETAIL"] = "retail";
    EProviderType["COMMERCIAL"] = "commercial";
    EProviderType["INVESTMENT"] = "investment";
    EProviderType["CREDIT_UNION"] = "creditUnion";
    EProviderType["PRIVATE"] = "private";
    EProviderType["SNL"] = "snl";
    EProviderType["CHALLENGER"] = "challenger";
    EProviderType["NEOBANK"] = "neobank";
    EProviderType["OTHER"] = "Other";
    EProviderType["TEST"] = "test";
})(EProviderType || (EProviderType = {}));
export var EProviderSessionStatus;
(function (EProviderSessionStatus) {
    EProviderSessionStatus["CONNECTED"] = "CONNECTED";
    EProviderSessionStatus["DISCONNECTED"] = "DISCONNECTED";
})(EProviderSessionStatus || (EProviderSessionStatus = {}));
export const emptyIntegrationProvider = {
    id: -1,
    name: '',
    displayName: '',
    country: '',
    customer: '',
    providerType: EProviderType.TEST,
    iconUrl: '',
    loginOptions: [],
};
export const IntegrationProviderSchema = ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.enums(Object.values(EProviderType)),
    iconUrl: ss.string(),
    loginOptions: ss.array(ss.type({
        iconUrl: ss.optional(ss.string()),
        loginMethod: ss.string(),
        params: ss.array(ss.type({
            name: ss.string(),
            type: ss.string(),
        })),
    })),
});
export const ProviderSessionSchema = ss.type({
    sessionId: ss.optional(ss.string()),
    alive: ss.optional(ss.boolean()),
    provider: ss.optional(ss.partial(IntegrationProviderSchema)),
});
