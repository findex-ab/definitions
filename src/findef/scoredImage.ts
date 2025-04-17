import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IScoredQuery } from "./scoredQuery";

export type IScoredImage =  {
  domain: string;
  score: number;
  src: string;
  query: string;
  failed?: boolean;
  attachment?: TDocRef<IAttachment>;
  name?: string;
  queries?: IScoredQuery[];
  keywords?: string[];
}
