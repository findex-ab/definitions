import * as ss from 'superstruct';
import { emptyIntegrationProvider } from "./integrationProvider";
export const emptyProviderImport = {
    providerId: -1,
    provider: emptyIntegrationProvider,
    session: { connected: false, id: '' },
    previous: { selected: { investmentIds: [], liabilityIds: [] } },
    selected: { investmentIds: [], liabilityIds: [] },
    available: { bankAccounts: [] },
    mutated: {
        liabilities: []
    },
    userControlledIds: [],
    seenExternalIds: [],
    newExternalIds: [],
    seenExternalLiabilityIds: [],
    newExternalLiabilityIds: [],
    lastSync: new Date(),
    runCount: 0
};
export const ProviderImportRequestSchema = ss.type({
    providerId: ss.number(),
    userAccountId: ss.optional(ss.string()),
    session: ss.type({
        id: ss.string()
    }),
    doNotRun: ss.optional(ss.boolean()),
    selected: ss.type({
        investmentIds: ss.array(ss.string()),
        liabilityIds: ss.optional(ss.array(ss.string()))
    }),
    mutated: ss.optional(ss.type({
        liabilities: ss.optional(ss.array(ss.any()))
    }))
});
