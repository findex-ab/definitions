import { TDocRef } from "./docref";
export declare enum EWebsiteContentType {
    WEBSITE = "WEBSITE",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    ARTICLE = "ARTICLE",
    FILE = "FILE"
}
export type IWebsite = {
    url: string;
    domain: string;
    contentType: EWebsiteContentType;
    text?: string;
    links?: string[];
    date?: string | Date;
    articles?: TDocRef<IWebsite>[];
    images?: TDocRef<IWebsite>[];
    files?: TDocRef<IWebsite>[];
    children?: TDocRef<IWebsite>[];
    parent?: TDocRef<IWebsite>;
    parentUrl?: string;
    childrenUrls?: string[];
    title?: string;
    description?: string;
    tags?: string[];
    meta?: Record<string, string>;
};
export type IFullWebsite = Omit<IWebsite, 'children' | 'articles' | 'images' | 'files'> & {
    children: IFullWebsite[];
    articles?: IFullWebsite[];
    images?: IFullWebsite[];
    files?: IFullWebsite[];
};
