import { ECrawlerCategory } from "./category";

export type ICrawlerFile = {
  category: ECrawlerCategory.FILE;
  url: string; 
  domain: string;
  name: string;
  extension:string; 
  keywords: string[];
  language?: string;
}
