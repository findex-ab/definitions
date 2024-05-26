import { TDocRef } from "./docref";
import { FindexInvestment, PotentialInvestment } from "./investment";
import * as ss from 'superstruct';
import { IUser } from "./user";
import { IntegrationAccount } from "./integrationAccount";
import { IntegrationProvider, emptyIntegrationProvider } from "./integrationProvider";


export type PotentialBankAccount = IntegrationAccount & {
  investments: PotentialInvestment[];
}

export type IProviderImportData = {
  bankAccounts: PotentialBankAccount[];
}

export type IProviderImportSession = {
  id?: string;
  connected: boolean;
}

export type IProviderImport = {
  providerId: number;
  provider?: IntegrationProvider;
  user?: TDocRef<IUser>;
  userAccountId?: string;
  session: IProviderImportSession;
  previous: {
    selected: { investmentIds: string[] };
  },
  selected: {
    investmentIds: string[]
  };
  available: IProviderImportData;
  lastSync?: Date | string;
  runCount: number;
}

export const emptyProviderImport: IProviderImport = {
  providerId: -1,
  provider: emptyIntegrationProvider,
  session: { connected: false, id: '' },
  previous: { selected: { investmentIds: [] } },
  selected: { investmentIds: [] },
  available: { bankAccounts: [] },
  lastSync: new Date(),
  runCount: 0
}

export type ProviderImportRequest = Partial<Omit<IProviderImport, 'available' | 'previous' | 'session'>> & {
  session: { id?: string };
};

export const ProviderImportRequestSchema = ss.type({
  providerId: ss.number(),
  userAccountId: ss.optional(ss.string()),
  session: ss.type({
    id: ss.string()
  }),
  selected: ss.type({
    investmentIds: ss.array(ss.string())
  })
})

export type ProviderImportExecution = {
  providerImport: IProviderImport;
  deleted: { investmentIds: string[] };
  upserted: { investments: FindexInvestment[] };
}
