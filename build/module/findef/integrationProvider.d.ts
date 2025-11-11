import * as ss from 'superstruct';
export declare enum EProviderType {
    RETAIL = "retail",
    COMMERCIAL = "commercial",
    INVESTMENT = "investment",
    CREDIT_UNION = "creditUnion",
    PRIVATE = "private",
    SNL = "snl",
    CHALLENGER = "challenger",
    NEOBANK = "neobank",
    OTHER = "Other",
    TEST = "test"
}
export declare enum EProviderSessionStatus {
    CONNECTED = "CONNECTED",
    DISCONNECTED = "DISCONNECTED"
}
export type IntegrationLoginOptionParam = {
    name: string;
    type: string;
};
export type IntegrationLoginOption = {
    iconUrl?: string;
    loginMethod: string;
    params: IntegrationLoginOptionParam[];
};
export interface IntegrationProvider {
    id: number;
    name: string;
    displayName: string;
    country: string;
    customer: string;
    providerType: EProviderType;
    iconUrl: string;
    loginOptions: IntegrationLoginOption[];
}
export declare const emptyIntegrationProvider: IntegrationProvider;
export declare const IntegrationProviderSchema: ss.Describe<IntegrationProvider>;
export type ProviderSession = {
    provider?: IntegrationProvider;
    sessionId?: string;
    alive?: boolean;
};
export type ProviderSessionMap = {
    [key: string]: ProviderSession;
};
export declare const ProviderSessionSchema: ss.Struct<{
    sessionId?: string | undefined;
    alive?: boolean | undefined;
    provider?: {
        id?: number | undefined;
        name?: string | undefined;
        displayName?: string | undefined;
        country?: string | undefined;
        customer?: string | undefined;
        providerType?: EProviderType | undefined;
        iconUrl?: string | undefined;
        loginOptions?: IntegrationLoginOption[] | undefined;
    } | undefined;
}, {
    sessionId: ss.Struct<string | undefined, null>;
    alive: ss.Struct<boolean | undefined, null>;
    provider: ss.Struct<{
        id?: number | undefined;
        name?: string | undefined;
        displayName?: string | undefined;
        country?: string | undefined;
        customer?: string | undefined;
        providerType?: EProviderType | undefined;
        iconUrl?: string | undefined;
        loginOptions?: IntegrationLoginOption[] | undefined;
    } | undefined, import("superstruct/dist/utils").PartialObjectSchema<{
        id: ss.Describe<number>;
        name: ss.Describe<string>;
        displayName: ss.Describe<string>;
        country: ss.Describe<string>;
        customer: ss.Describe<string>;
        providerType: ss.Describe<EProviderType>;
        iconUrl: ss.Describe<string>;
        loginOptions: ss.Describe<IntegrationLoginOption[]>;
    }>>;
}>;
