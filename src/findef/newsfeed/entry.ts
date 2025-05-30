import { IEmbeddingVector } from "../embedding";
import { TDocRef } from "../docref";
import { IAttachment } from "../attachment";

export type INewsEntry = {
  uuid: string;
  publishedDate: string | Date;
  title: string;
  imageURL: string;
  site: string;
  text: string
  url: string;
  siteLogoURL?: string;
  siteLogo?: TDocRef<IAttachment>;
  embeddings?: Array<TDocRef<IEmbeddingVector>>;
  vectorIds?: string[];
}

//{
//    "publishedDate": "2025-05-20T09:23:37.000Z",
//    "title": "Global retailers' tariff strategy risks spreading pain beyond US consumer",
//    "image": "https://images.financialmodelingprep.com/news/global-retailers-tariff-strategy-risks-spreading-pain-beyond-us-20250520.jpg",
//    "site": "reuters.com",
//    "text": "Global retailers including sandal maker Birkenstock and jeweller Pandora are looking at spreading the cost of U.S. tariffs by raising prices across markets to avoid big hikes in the United States that could hurt sales.",
//    "url": "https://www.reuters.com/business/retail-consumer/global-retailers-tariff-strategy-risks-spreading-pain-beyond-us-consumer-2025-05-20/"
//}
