import { ECrawlerCategory } from "./category";
export type ICrawlerFile = {
    category: ECrawlerCategory;
    src: string;
    domain: string;
    name: string;
    extension: string;
};
