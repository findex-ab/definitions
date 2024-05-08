import * as ss from 'superstruct';

export enum EProviderSessionStatus {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED'
}

export type IntegrationLoginOptionParam = {
  name: string;
  type: string;
}

export type IntegrationLoginOption = {
  iconUrl?: string;
  loginMethod: string;
  params: IntegrationLoginOptionParam[]
}

export interface IntegrationProvider {
  id: number;
  name: string;
  displayName: string;
  country: string;
  customer: string;
  providerType: string;
  iconUrl: string;
  loginOptions: IntegrationLoginOption[];
}

export const IntegrationProviderSchema: ss.Describe<IntegrationProvider> =
  ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.string(),
    iconUrl: ss.string(),
    loginOptions: ss.array<ss.Describe<IntegrationLoginOption>>(ss.type({
      iconUrl: ss.optional(ss.string()),
      loginMethod: ss.string(),
      params: ss.array<ss.Describe<IntegrationLoginOptionParam>>(ss.type({
        name: ss.string(),
        type: ss.string()
      }))
    }))
  });

export type ProviderSession = {
  provider?: IntegrationProvider;
  sessionId?: string;
  alive?: boolean;
};

export type ProviderSessionMap = {
  [key: string]: ProviderSession;
};

export const ProviderSessionSchema = ss.type({
  sessionId: ss.optional(ss.string()),
  alive: ss.optional(ss.boolean()),
  provider: ss.optional(ss.partial(IntegrationProviderSchema)),
});
