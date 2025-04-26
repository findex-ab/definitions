import { ECrawlerCategory } from "./category";
export type ICrawlerImage = {
    category: ECrawlerCategory.IMAGE;
    url: string;
    domain: string;
    name?: string;
    keywords: string[];
};
