import { TDocRef } from "./docref";
export type IWebsite = {
    url: string;
    domain: string;
    children?: TDocRef<IWebsite>[];
    title?: string;
    description?: string;
    meta?: Record<string, string>;
};
