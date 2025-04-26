import { TDocRef } from "../docref";
import { ICrawlerArticle } from "./article";
import { ECrawlerCategory } from "./category";
import { ICrawlerFile } from "./file";
import { ICrawlerImage } from "./image";

export type ICrawlerWebsite = {
  category: ECrawlerCategory.WEBSITE;
  url: string;
  domain: string;
  name?: string;
  articles: Array<TDocRef<ICrawlerArticle>>;
  images: Array<TDocRef<ICrawlerImage>>;
  files: Array<TDocRef<ICrawlerFile>>;
  keywords: string[];
}
