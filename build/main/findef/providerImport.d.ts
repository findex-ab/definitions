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
export type ProviderImportIntegrator = 'finsquid' | 'flanks';
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
    mutated?: {
        liabilities?: PotentialLiability[];
    };
    userControlledIds?: string[];
    seenExternalIds: string[];
    newExternalIds: string[];
    seenExternalLiabilityIds: string[];
    newExternalLiabilityIds: string[];
    available: IProviderImportData;
    lastSync?: Date | string;
    integrator?: ProviderImportIntegrator;
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
    session: {
        id: string;
    };
    providerId: number;
    selected: {
        investmentIds: string[];
        liabilityIds?: string[] | undefined;
    };
    userAccountId?: string | undefined;
    mutated?: {
        liabilities?: any[] | undefined;
    } | undefined;
    userControlledIds?: string[] | undefined;
    integrator?: "finsquid" | "flanks" | undefined;
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
        liabilityIds?: string[] | undefined;
    }, {
        investmentIds: ss.Struct<string[], ss.Struct<string, null>>;
        liabilityIds: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    }>;
    mutated: ss.Struct<{
        liabilities?: any[] | undefined;
    } | undefined, {
        liabilities: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
    }>;
    userControlledIds: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    integrator: ss.Struct<"finsquid" | "flanks" | undefined, {
        finsquid: "finsquid";
        flanks: "flanks";
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
