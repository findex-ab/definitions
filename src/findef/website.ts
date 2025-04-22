import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";

export enum EWebsiteContentType {
  WEBSITE = 'WEBSITE',
  IMAGE = 'IMAGE',
  ICON = 'ICON',
  VIDEO = 'VIDEO',
  ARTICLE = 'ARTICLE',
  NEWS_ARTICLE = 'NEWS_ARTICLE',
  FILE = 'FILE'
}

export type IWebsite = {
  url: string;
  domain: string;
  contentType: EWebsiteContentType;
  attachment?: TDocRef<IAttachment>;
  text?: string;
  links?: string[];
  date?: string | Date;
  articles?: TDocRef<IWebsite>[];
  images?: TDocRef<IWebsite>[];
  files?: TDocRef<IWebsite>[];
  children?: TDocRef<IWebsite>[];
  parent?: TDocRef<IWebsite>;
  parentUrl?: string;
  childrenUrls?: string[];
  title?: string;
  description?: string;
  tags?: string[];
  meta?: Record<string, string>;
}

export type IFullWebsite = Omit<IWebsite, 'children' | 'articles' | 'images' | 'files' | 'attachment'> & {
  children: IFullWebsite[];
  articles?: IFullWebsite[];
  images?: IFullWebsite[];
  files?: IFullWebsite[];
  attachment?: IAttachment;
}
