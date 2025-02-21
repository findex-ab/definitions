import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IAsset } from './asset';
import { IUser } from './user';
import { IAttachment } from './attachment';
import { IBatchMail } from './mail';

export enum ECommunicationStatus {
  DRAFT = "DRAFT",
  SENT = "SENT",
  SCHEDULED = "SCHEDULED"
}

export interface ICommunication {
  asset: TDocRef<IAsset>;
  sender: TDocRef<IUser>;
  recepients: string[];
  headline: string;
  body: string;
  status: ECommunicationStatus;
  attachments: IAttachment[];
  isDraft: boolean;
  shouldSendEmail: boolean;
  publishedAt?: Date;
  createdBy: TDocRef<IUser>,
  showInAssetPage: boolean;
  inAppReadBy: TDocRef<IUser>[];
  emailReadBy: TDocRef<IUser>[];
  batchMail: TDocRef<IBatchMail>;
}

export const CommunicationSchema = ss.type({
  asset: ss.string(),
  sender: ss.string(),
  recepients: ss.array(ss.string()),
  headline: ss.string(),
  body: ss.string(),
  status: ss.enums(Object.keys(ECommunicationStatus)),
  attachments: ss.array(ss.any()),
  isDraft: ss.boolean(),
  shouldSendEmail: ss.boolean(),
  publishedAt: ss.optional(ss.date()),
  createdBy: ss.string(),
  showInAssetPage: ss.boolean(),
  inAppReadBy: ss.array(ss.string()),
  emailReadBy: ss.array(ss.string())
})