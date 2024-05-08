import * as ss from 'superstruct';
import { IntegrationProvider } from './integrationProvider';
import { IntegrationAccountWithPositions } from './integrationAccount';
export type IntegrationBankAccountImport = {
    accountId: string;
    positionIds: string[];
    positionIdsToRemove?: string[];
};
export declare const IntegrationBankAccountImportSchema: ss.Struct<{
    accountId: string;
    positionIds: string[];
    positionIdsToRemove?: string[] | undefined;
}, {
    accountId: ss.Struct<string, null>;
    positionIds: ss.Struct<string[], ss.Struct<string, null>>;
    positionIdsToRemove: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
}>;
export type IntegrationImport = {
    providerId: number;
    userAccountId: string;
    bankAccounts: IntegrationBankAccountImport[];
    lastSync?: Date;
    alive?: boolean;
    sessionId?: string;
    availableBankAccounts?: IntegrationAccountWithPositions[];
    positionsImportedCount: number;
    counter: number;
};
export type IntegrationImportWithProvider = IntegrationImport & {
    provider?: IntegrationProvider;
};
export declare const IntegrationImportSchema: ss.Struct<{
    providerId: number;
    userAccountId: string;
    bankAccounts: {
        accountId: string;
        positionIds: string[];
        positionIdsToRemove?: string[] | undefined;
    }[];
    sessionId?: string | undefined;
    alive?: boolean | undefined;
    positionsImportedCount?: number | undefined;
    counter?: number | undefined;
}, {
    providerId: ss.Struct<number, null>;
    userAccountId: ss.Struct<string, null>;
    bankAccounts: ss.Struct<{
        accountId: string;
        positionIds: string[];
        positionIdsToRemove?: string[] | undefined;
    }[], ss.Struct<{
        accountId: string;
        positionIds: string[];
        positionIdsToRemove?: string[] | undefined;
    }, {
        accountId: ss.Struct<string, null>;
        positionIds: ss.Struct<string[], ss.Struct<string, null>>;
        positionIdsToRemove: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    }>>;
    alive: ss.Struct<boolean | undefined, null>;
    sessionId: ss.Struct<string | undefined, null>;
    positionsImportedCount: ss.Struct<number | undefined, null>;
    counter: ss.Struct<number | undefined, null>;
}>;
