import { TDocRef } from "../docref";
import { INewsEntry } from "./entry";
import { IUser } from "../user";
import { IEmbeddingVector } from "../embedding";
import { IAsset } from "../asset";
export declare enum ENewsFeedOwner {
    USER = "USER",
    ASSET = "ASSET"
}
export type INewsFeed = {
    user?: TDocRef<IUser>;
    asset?: TDocRef<IAsset>;
    owner: ENewsFeedOwner;
    articles: Array<TDocRef<INewsEntry>>;
    negativeEmbeddings: Array<TDocRef<IEmbeddingVector>>;
    positiveEmbeddings: Array<TDocRef<IEmbeddingVector>>;
};
