import { TDocRef } from "./docref";
import { FindexInvestment, PotentialInvestment } from "./investment";
import * as ss from 'superstruct';
import { IUser } from "./user";
import { IntegrationAccount } from "./integrationAccount";
import { IntegrationProvider, emptyIntegrationProvider } from "./integrationProvider";
import { ILiability, PotentialLiability } from "./liability";


export type PotentialBankAccount = IntegrationAccount & {
  investments: PotentialInvestment[];
  liabilities: PotentialLiability[];
}

export type IProviderImportData = {
  bankAccounts: PotentialBankAccount[];
}

export type IProviderImportSession = {
  id?: string;
  connected: boolean;
}

export type ProviderImportIntegrator = 'finsquid' | 'flanks';

export type IProviderImport = {
  providerId: number;
  uid?: string;
  connectorId?: string; // flanks
  provider?: IntegrationProvider;
  user?: TDocRef<IUser>;
  userAccountId?: string;
  session: IProviderImportSession;
  previous: {
    selected: {
      investmentIds: string[];
      liabilityIds: string[];
    };
  },
  selected: {
    investmentIds: string[];
    liabilityIds: string[];
  };
  mutated?: {
    liabilities?: PotentialLiability[];
  },
  userControlledIds?: string[];
  seenExternalIds: string[];
  newExternalIds: string[];
  seenExternalLiabilityIds: string[];
  newExternalLiabilityIds: string[];
  available: IProviderImportData;
  lastSync?: Date | string;
  integrator?: ProviderImportIntegrator;
  runCount: number;
}

export const emptyProviderImport: IProviderImport = {
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
}

export type ProviderImportRequest = Partial<Omit<IProviderImport, 'available' | 'previous' | 'session' | 'seenExternalIds' | 'newExternalIds'>> & {
  session: { id?: string };
  doNotRun?: boolean;
};

export const ProviderImportRequestSchema = ss.type({
  providerId: ss.number(),
  uid: ss.optional(ss.string()),
  connectorId: ss.optional(ss.string()),
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
  })),
  userControlledIds: ss.optional(ss.array(ss.string())),
  integrator: ss.optional(ss.enums(['finsquid', 'flanks']))
})

export type ProviderImportExecution = {
  providerImport: IProviderImport;
  deleted: { investmentIds: string[], liabilityIds: string[] };
  upserted: { investments: FindexInvestment[], liabilities: ILiability[] };
}
