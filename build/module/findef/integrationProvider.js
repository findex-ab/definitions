import * as ss from 'superstruct';
export var EProviderSessionStatus;
(function (EProviderSessionStatus) {
    EProviderSessionStatus["CONNECTED"] = "CONNECTED";
    EProviderSessionStatus["DISCONNECTED"] = "DISCONNECTED";
})(EProviderSessionStatus || (EProviderSessionStatus = {}));
export const IntegrationProviderSchema = ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.string(),
    iconUrl: ss.string(),
    loginOptions: ss.array(ss.type({
        iconUrl: ss.optional(ss.string()),
        loginMethod: ss.string(),
        params: ss.array(ss.type({
            name: ss.string(),
            type: ss.string()
        }))
    }))
});
export const ProviderSessionSchema = ss.type({
    sessionId: ss.optional(ss.string()),
    alive: ss.optional(ss.boolean()),
    provider: ss.optional(ss.partial(IntegrationProviderSchema)),
});
