import { TDocRef } from "./docref";
import { INewsItem } from "./news";
import { IUser } from "./user";
export type INewsRecommendation = {
    user: TDocRef<IUser>;
    article: TDocRef<INewsItem>;
    score: number;
};
