import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IAsset } from './asset';
import { IUser } from './user';
import { IAttachment } from './attachment';

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
  emailSentAt?: Date;
  showInAssetPage: boolean;
  inAppReadBy: TDocRef<IUser>[];
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
  emailSentAt: ss.optional(ss.date()),
  showInAssetPage: ss.boolean(),
  inAppReadBy: ss.array(ss.string())
})