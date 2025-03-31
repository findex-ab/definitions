import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
export type ILogoInformation = {
    name: string;
    domain: string;
    url: string;
    image?: TDocRef<IAttachment>;
};
export declare const getLogoURL: (logo: ILogoInformation | TDocRef<ILogoInformation> | string | null | undefined, token?: string) => string | undefined;
