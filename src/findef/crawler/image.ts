import { ECrawlerCategory } from "./category";

export type ICrawlerImage = {
  category: ECrawlerCategory.IMAGE;
  src: string;
  domain: string;
  name?: string;
}
