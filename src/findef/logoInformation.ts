import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IScoredSymbol } from "./scoredSymbol";

export type ILogoInformation = {
  name: string;
  domain: string;
  url: string;
  image?: TDocRef<IAttachment>;
  scores?: IScoredSymbol[];
}


export const getLogoURL = (logo: ILogoInformation | TDocRef<ILogoInformation> | string | null | undefined, token?: string): string | undefined => {

  const getUrl = (): string | undefined => {
    if (logo === null || typeof logo === 'undefined') return undefined;
  
    if (typeof logo === 'object') {
      const logoObj = logo as ILogoInformation;
      if (typeof logoObj.url === 'string') {
        return logoObj.url;
      }
    }
  
    if (typeof logo === 'string') {
      if (logo.startsWith('http')) return logo;
    }
  
    return undefined;
  }

  const url = getUrl();
  if (!url) return undefined;

  if (typeof token === 'string' && !url.includes('?')) {
    return `${url}?token=${token}`
  }


  return url;
}
