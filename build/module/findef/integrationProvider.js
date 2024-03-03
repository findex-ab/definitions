import * as ss from 'superstruct';
export const IntegrationProviderSchema = ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.string(),
    iconUrl: ss.string(),
});
export const ProviderSessionSchema = ss.type({
    sessionId: ss.optional(ss.string()),
    alive: ss.optional(ss.boolean()),
    provider: ss.optional(ss.partial(IntegrationProviderSchema))
});
