import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IAttachment } from './attachment';
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
    TEST = "test",
    CCXT_CRYPTO_EXCHANGE = "CCXT_CRYPTO_EXCHANGE"
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
    loginDevice?: string[];
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
    image?: TDocRef<IAttachment>;
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
    provider?: {
        [x: number]: any;
        [x: symbol]: any;
        [x: string]: any;
    } | undefined;
    sessionId?: string | undefined;
    alive?: boolean | undefined;
}, {
    sessionId: ss.Struct<string | undefined, null>;
    alive: ss.Struct<boolean | undefined, null>;
    provider: ss.Struct<{
        [x: number]: any;
        [x: symbol]: any;
        [x: string]: any;
    } | undefined, import("superstruct/dist/utils").PartialObjectSchema<any>>;
}>;
