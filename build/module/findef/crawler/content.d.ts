import { ICrawlerArticle } from "./article";
import { ICrawlerFile } from "./file";
import { ICrawlerImage } from "./image";
import { ICrawlerWebsite } from "./website";
export type ICrawlerContent = ICrawlerWebsite | ICrawlerArticle | ICrawlerImage | ICrawlerFile;
