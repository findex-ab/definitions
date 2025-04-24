import { TDocRef } from "../docref";
import { ICrawlerArticle } from "./article";
import { ECrawlerCategory } from "./category";
import { ICrawlerImage } from "./image";
export type ICrawlerWebsite = {
    category: ECrawlerCategory.WEBSITE;
    url: string;
    name?: string;
    articles: Array<TDocRef<ICrawlerArticle>>;
    images: Array<TDocRef<ICrawlerImage>>;
};
