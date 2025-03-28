import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
export type ILogoInformation = {
    name: string;
    domain: string;
    url: string;
    image?: TDocRef<IAttachment>;
};
