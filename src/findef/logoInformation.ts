import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";

export type ILogoInformation = {
  name: string;
  domain: string;
  url: string;
  image?: TDocRef<IAttachment>;
}


export const getLogoURL = (logo: ILogoInformation | TDocRef<ILogoInformation> | string | null | undefined): string | undefined => {
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
