import * as ss from 'superstruct';

export type IntegrationBankAccountImport = {
  accountId: string;
  positionIds: string[];
}

export const IntegrationBankAccountImportSchema = ss.type({
  accountId: ss.string(),
  positionIds: ss.array(ss.string())
})

export type IntegrationImport = {
  providerId: number;
  userAccountId: string;
  bankAccounts: IntegrationBankAccountImport[];
  lastSync?: Date;
}

export const IntegrationImportSchema = ss.type({
  providerId: ss.number(),
  userAccountId: ss.string(),
  bankAccounts: ss.array(IntegrationBankAccountImportSchema)
})
