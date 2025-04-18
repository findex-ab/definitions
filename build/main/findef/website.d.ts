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
    meta?: Record<string, string>;
};
