import * as ss from 'superstruct';
export interface IntegrationProvider {
    id: number;
    name: string;
    displayName: string;
    country: string;
    customer: string;
    providerType: string;
    iconUrl: string;
}
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
        name?: string | undefined;
        id?: number | undefined;
        providerType?: string | undefined;
        displayName?: string | undefined;
        country?: string | undefined;
        customer?: string | undefined;
        iconUrl?: string | undefined;
    } | undefined;
    sessionId?: string | undefined;
    alive?: boolean | undefined;
}, {
    sessionId: ss.Struct<string | undefined, null>;
    alive: ss.Struct<boolean | undefined, null>;
    provider: ss.Struct<{
        name?: string | undefined;
        id?: number | undefined;
        providerType?: string | undefined;
        displayName?: string | undefined;
        country?: string | undefined;
        customer?: string | undefined;
        iconUrl?: string | undefined;
    } | undefined, import("superstruct/dist/utils").PartialObjectSchema<{
        id: ss.Describe<number>;
        name: ss.Describe<string>;
        displayName: ss.Describe<string>;
        country: ss.Describe<string>;
        customer: ss.Describe<string>;
        providerType: ss.Describe<string>;
        iconUrl: ss.Describe<string>;
    }>>;
}>;
