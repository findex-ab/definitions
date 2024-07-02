import { TDocRef } from "./docref";
import { FindexInvestment, PotentialInvestment } from "./investment";
import * as ss from 'superstruct';
import { IUser } from "./user";
import { IntegrationAccount } from "./integrationAccount";
import { IntegrationProvider } from "./integrationProvider";
export type PotentialBankAccount = IntegrationAccount & {
    investments: PotentialInvestment[];
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
        };
    };
    selected: {
        investmentIds: string[];
    };
    available: IProviderImportData;
    lastSync?: Date | string;
    runCount: number;
};
export declare const emptyProviderImport: IProviderImport;
export type ProviderImportRequest = Partial<Omit<IProviderImport, 'available' | 'previous' | 'session'>> & {
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
    }, {
        investmentIds: ss.Struct<string[], ss.Struct<string, null>>;
    }>;
}>;
export type ProviderImportExecution = {
    providerImport: IProviderImport;
    deleted: {
        investmentIds: string[];
    };
    upserted: {
        investments: FindexInvestment[];
    };
};
