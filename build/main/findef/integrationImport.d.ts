import * as ss from 'superstruct';
export type IntegrationBankAccountImport = {
    accountId: string;
    positionIds: string[];
};
export declare const IntegrationBankAccountImportSchema: ss.Struct<{
    accountId: string;
    positionIds: string[];
}, {
    accountId: ss.Struct<string, null>;
    positionIds: ss.Struct<string[], ss.Struct<string, null>>;
}>;
export type IntegrationImport = {
    providerId: number;
    userAccountId: string;
    bankAccounts: IntegrationBankAccountImport[];
};
export declare const IntegrationImportSchema: ss.Struct<{
    providerId: number;
    userAccountId: string;
    bankAccounts: {
        accountId: string;
        positionIds: string[];
    }[];
}, {
    providerId: ss.Struct<number, null>;
    userAccountId: ss.Struct<string, null>;
    bankAccounts: ss.Struct<{
        accountId: string;
        positionIds: string[];
    }[], ss.Struct<{
        accountId: string;
        positionIds: string[];
    }, {
        accountId: ss.Struct<string, null>;
        positionIds: ss.Struct<string[], ss.Struct<string, null>>;
    }>>;
}>;
