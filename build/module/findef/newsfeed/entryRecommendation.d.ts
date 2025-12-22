import { IAsset } from "../asset";
import { TDocRef } from "../docref";
import { IUser } from "../user";
import { INewsEntry } from "./entry";
export type INewsEntryRecommendation = {
    uuid: string;
    score: number;
    article: TDocRef<INewsEntry>;
    assets?: Array<TDocRef<IAsset>>;
    user?: TDocRef<IUser>;
    disliked?: boolean;
    isRead?: boolean;
};
export type IFullNewsEntryRecommendation = {
    uuid: string;
    score: number;
    article: INewsEntry;
    assets?: Array<IAsset>;
    user?: TDocRef<IUser>;
    disliked?: boolean;
    isRead?: boolean;
};
