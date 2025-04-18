import { TDocRef } from "./docref";
export declare enum EWebsiteContentType {
    WEBSITE = "WEBSITE",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}
export type IWebsite = {
    url: string;
    domain: string;
    contentType: EWebsiteContentType;
    children?: TDocRef<IWebsite>[];
    title?: string;
    description?: string;
    tags?: string[];
    meta?: Record<string, string>;
};
export type IFullWebsite = Omit<IWebsite, 'children'> & {
    children: IWebsite[];
};
