import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
export type IOpportunityArticle = {
    title: string;
    description: string;
    image?: TDocRef<IAttachment>;
};
