import { IEmbeddingVector } from "../embedding";
import { TDocRef } from "../docref";
export type INewsEntry = {
    uuid: string;
    publishedDate: string | Date;
    title: string;
    imageURL: string;
    site: string;
    text: string;
    url: string;
    embeddings?: Array<TDocRef<IEmbeddingVector>>;
};
