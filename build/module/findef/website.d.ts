import { TDocRef } from "./docref";
import { IWebsiteImage } from "./websiteImage";
export declare enum EWebsiteContentType {
    WEBSITE = "WEBSITE",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    ARTICLE = "ARTICLE"
}
export type IWebsite = {
    url: string;
    domain: string;
    contentType: EWebsiteContentType;
    text?: string;
    images?: IWebsiteImage[];
    links?: string[];
    date?: string | Date;
    articles?: TDocRef<IWebsite>[];
    children?: TDocRef<IWebsite>[];
    parent?: TDocRef<IWebsite>;
    parentUrl?: string;
    childrenUrls?: string[];
    title?: string;
    description?: string;
    tags?: string[];
    meta?: Record<string, string>;
};
export type IFullWebsite = Omit<IWebsite, 'children' | 'articles'> & {
    children: IFullWebsite[];
    articles?: IFullWebsite[];
};
