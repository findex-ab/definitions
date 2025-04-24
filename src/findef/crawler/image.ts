import { ECrawlerCategory } from "./category";

export type ICrawlerImage = {
  category: ECrawlerCategory.IMAGE;
  src: string;
  name?: string;
}
