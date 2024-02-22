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

export const IntegrationProviderSchema: ss.Describe<IntegrationProvider> = ss.type({
  id: ss.number(),
  name: ss.string(),
  displayName: ss.string(),
  country: ss.string(),
  customer: ss.string(),
  providerType: ss.string(),
  iconUrl: ss.string()
});
