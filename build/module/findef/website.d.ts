import { TDocRef } from "./docref";
import { IWebsiteArticle } from "./websiteArticle";
import { IWebsiteImage } from "./websiteImage";
export declare enum EWebsiteContentType {
    WEBSITE = "WEBSITE",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}
export type IWebsite = {
    url: string;
    domain: string;
    contentType: EWebsiteContentType;
    images?: IWebsiteImage[];
    links?: string[];
    articles?: IWebsiteArticle[];
    children?: TDocRef<IWebsite>[];
    parent?: TDocRef<IWebsite>;
    parentUrl?: string;
    childrenUrls?: string[];
    title?: string;
    description?: string;
    tags?: string[];
    meta?: Record<string, string>;
};
export type IFullWebsite = Omit<IWebsite, 'children'> & {
    children: IFullWebsite[];
};
