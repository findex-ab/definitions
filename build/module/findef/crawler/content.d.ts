import { ICrawlerArticle } from "./article";
import { ICrawlerImage } from "./image";
import { ICrawlerWebsite } from "./website";
export type ICrawlerContent = ICrawlerWebsite | ICrawlerArticle | ICrawlerImage;
