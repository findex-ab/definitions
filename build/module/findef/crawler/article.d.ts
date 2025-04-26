import { TDocRef } from "../docref";
import { ECrawlerCategory } from "./category";
import { ICrawlerImage } from "./image";
export type ICrawlerArticle = {
    category: ECrawlerCategory.ARTICLE;
    uid: string;
    url: string;
    domain: string;
    text: string;
    name?: string;
    images: Array<TDocRef<ICrawlerImage>>;
    keywords: string[];
};
