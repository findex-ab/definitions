import { TDocRef } from "../docref";
import { ICrawlerImage } from "./image";

export type ICrawlerArticle = {
  uid: string;
  url: string;
  text: string;
  name?: string;
  images: Array<TDocRef<ICrawlerImage>>;
}
