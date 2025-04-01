import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IScoredSymbol } from "./scoredSymbol";
export type ILogoInformation = {
    name: string;
    domain: string;
    url: string;
    image?: TDocRef<IAttachment>;
    scores?: IScoredSymbol[];
};
export declare const getLogoURL: (logo: ILogoInformation | TDocRef<ILogoInformation> | string | null | undefined, token?: string) => string | undefined;
