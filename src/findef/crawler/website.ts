import { TDocRef } from "../docref";
import { ICrawlerArticle } from "./article";
import { ICrawlerImage } from "./image";

export type ICrawlerWebsite = {
  url: string;
  name?: string;
  articles: Array<TDocRef<ICrawlerArticle>>;
  images: Array<TDocRef<ICrawlerImage>>;
}
