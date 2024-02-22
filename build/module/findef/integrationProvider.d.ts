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
