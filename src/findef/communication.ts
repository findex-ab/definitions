import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IAsset } from './asset';
import { IUser } from './user';
import { IAttachment } from './attachment';
import { IBatchMail } from './mail';
import { ISavedDocument } from './savedDocument';

export enum ECommunicationStatus {
  DRAFT = "DRAFT",
  SENT = "SENT",
  SCHEDULED = "SCHEDULED",
  FAILED = "FAILED"
}

export interface ICommunication {
  asset: TDocRef<IAsset>;
  sender?: TDocRef<IUser>;
  recepients: string[];
  headline: string;
  body: string;
  version?: number;
  status: ECommunicationStatus;
  attachments: TDocRef<IAttachment>[] | ISavedDocument<IAttachment>[];
  isDraft: boolean;
  shouldSendEmail: boolean;
  publishedAt?: Date;
  createdBy: TDocRef<IUser>,
  showInAssetPage: boolean;
  inAppReadBy: TDocRef<IUser>[];
  emailReadBy: TDocRef<IUser>[];
  batchMail?: TDocRef<IBatchMail>;
  bannerColor?: string;
}

export const CommunicationSchema = ss.type({
  asset: ss.string(),
  sender: ss.optional(ss.string()),
  recepients: ss.array(ss.string()),
  headline: ss.string(),
  body: ss.string(),
  version: ss.optional(ss.string()),
  status: ss.enums(Object.keys(ECommunicationStatus)),
  attachments: ss.array(ss.any()),
  isDraft: ss.boolean(),
  shouldSendEmail: ss.boolean(),
  publishedAt: ss.optional(ss.date()),
  createdBy: ss.string(),
  showInAssetPage: ss.boolean(),
  inAppReadBy: ss.array(ss.string()),
  emailReadBy: ss.array(ss.string()),
  batchMail: ss.optional(ss.string()),
  bannerColor: ss.optional(ss.string())
})
