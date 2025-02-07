import { TDocRef } from "./docref";
import { FindexInvestment, PotentialInvestment } from "./investment";
import * as ss from 'superstruct';
import { IUser } from "./user";
import { IntegrationAccount } from "./integrationAccount";
import { IntegrationProvider } from "./integrationProvider";
import { ILiability, PotentialLiability } from "./liability";
export type PotentialBankAccount = IntegrationAccount & {
    investments: PotentialInvestment[];
    liabilities: PotentialLiability[];
};
export type IProviderImportData = {
    bankAccounts: PotentialBankAccount[];
};
export type IProviderImportSession = {
    id?: string;
    connected: boolean;
};
export type IProviderImport = {
    providerId: number;
    provider?: IntegrationProvider;
    user?: TDocRef<IUser>;
    userAccountId?: string;
    session: IProviderImportSession;
    previous: {
        selected: {
            investmentIds: string[];
            liabilityIds: string[];
        };
    };
    selected: {
        investmentIds: string[];
        liabilityIds: string[];
    };
    seenExternalIds: string[];
    newExternalIds: string[];
    seenExternalLiabilityIds: string[];
    newExternalLiabilityIds: string[];
    available: IProviderImportData;
    lastSync?: Date | string;
    runCount: number;
};
export declare const emptyProviderImport: IProviderImport;
export type ProviderImportRequest = Partial<Omit<IProviderImport, 'available' | 'previous' | 'session' | 'seenExternalIds' | 'newExternalIds'>> & {
    session: {
        id?: string;
    };
    doNotRun?: boolean;
};
export declare const ProviderImportRequestSchema: ss.Struct<{
    providerId: number;
    session: {
        id: string;
    };
    selected: {
        investmentIds: string[];
        liabilityIds: string[];
    };
    userAccountId?: string | undefined;
    doNotRun?: boolean | undefined;
}, {
    providerId: ss.Struct<number, null>;
    userAccountId: ss.Struct<string | undefined, null>;
    session: ss.Struct<{
        id: string;
    }, {
        id: ss.Struct<string, null>;
    }>;
    doNotRun: ss.Struct<boolean | undefined, null>;
    selected: ss.Struct<{
        investmentIds: string[];
        liabilityIds: string[];
    }, {
        investmentIds: ss.Struct<string[], ss.Struct<string, null>>;
        liabilityIds: ss.Struct<string[], ss.Struct<string, null>>;
    }>;
}>;
export type ProviderImportExecution = {
    providerImport: IProviderImport;
    deleted: {
        investmentIds: string[];
        liabilityIds: string[];
    };
    upserted: {
        investments: FindexInvestment[];
        liabilities: ILiability[];
    };
};
