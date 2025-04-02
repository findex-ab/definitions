import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
export type IScoredImage = {
    domain: string;
    score: number;
    src: string;
    query: string;
    failed?: boolean;
    attachment?: TDocRef<IAttachment>;
    name?: string;
};
