import * as ss from 'superstruct';
import { IntegrationProvider } from './integrationProvider';
import { IntegrationAccountWithPositions } from './integrationAccount';

export type IntegrationBankAccountImport = {
  accountId: string;
  positionIds: string[];
  positionIdsToRemove?: string[];
}

export const IntegrationBankAccountImportSchema = ss.type({
  accountId: ss.string(),
  positionIds: ss.array(ss.string()),
  positionIdsToRemove: ss.optional(ss.array(ss.string()))
})

export type IntegrationImport = {
  providerId: number;
  userAccountId: string;
  bankAccounts: IntegrationBankAccountImport[];
  lastSync?: Date;
  alive?: boolean;
  sessionId?: string;
  availableBankAccounts?: IntegrationAccountWithPositions[];
  positionsImportedCount: number;
  counter: number; // how many times this import has been executed
}

export type IntegrationImportWithProvider = IntegrationImport & {
  provider?: IntegrationProvider;
}

export const IntegrationImportSchema = ss.type({
  providerId: ss.number(),
  userAccountId: ss.string(),
  bankAccounts: ss.array(IntegrationBankAccountImportSchema),
  alive: ss.optional(ss.boolean()),
  sessionId: ss.optional(ss.string()),
  positionsImportedCount: ss.optional(ss.number()),
  counter: ss.optional(ss.number())
})
