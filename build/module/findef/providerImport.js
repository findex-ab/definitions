import * as ss from 'superstruct';
export const ProviderImportRequestSchema = ss.type({
    providerId: ss.number(),
    userAccountId: ss.optional(ss.string()),
    session: ss.type({
        id: ss.string()
    }),
    selected: ss.type({
        investmentIds: ss.array(ss.string())
    })
});
