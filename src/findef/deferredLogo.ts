import { IAttachment } from "./attachment";

export type FindLogoOptions = {
  currency?: string;
  symbol?: string;
  imgUrl?: string;
  sourceUrl?: string;
  skipLookup?: boolean;
  defer?: boolean;
}

export type IDeferredLogo = {
  uid: string;
  nameOrDomain: string;
  options: FindLogoOptions;
  config: Partial<IAttachment>;
}
