import { ECrawlerCategory } from "./category";

export type ICrawlerFile = {
  category: ECrawlerCategory.FILE;
  src: string; 
  domain: string;
  name: string;
  extension:string; 
}
