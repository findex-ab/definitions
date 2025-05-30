import { IEmbeddingVector } from "../embedding";
import { TDocRef } from "../docref";
import { IAttachment } from "../attachment";
export type INewsEntry = {
    uuid: string;
    publishedDate: string | Date;
    title: string;
    imageURL: string;
    site: string;
    text: string;
    url: string;
    siteLogoURL?: string;
    siteLogo?: TDocRef<IAttachment>;
    embeddings?: Array<TDocRef<IEmbeddingVector>>;
    vectorIds?: string[];
};
