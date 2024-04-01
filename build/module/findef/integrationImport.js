import * as ss from 'superstruct';
export const IntegrationBankAccountImportSchema = ss.type({
    accountId: ss.string(),
    positionIds: ss.array(ss.string())
});
export const IntegrationImportSchema = ss.type({
    providerId: ss.number(),
    userAccountId: ss.string(),
    bankAccounts: ss.array(IntegrationBankAccountImportSchema)
});
