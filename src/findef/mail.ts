import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { ICommunication } from './communication';

export enum EMailStatus {
  QUEUED = 'QUEUED',
  SENDING = 'SENDING',
  SENT = 'SENT',
  FAILED = 'FAILED',
  OPENED = 'OPENED'
}

export interface IMail {
  _id?: string;
  to: string;
  from: string;
  subject: string;
  fromName?: string;
  body?: string;
  templateId?: string;
  customArgs?: {[key: string]: any},
  dynamicTemplateData?: {[key: string]: any},
  communication?: TDocRef<ICommunication>,
  batchMail?: TDocRef<IBatchMail>,
  sendGridMessageId?: string,
  status?: EMailStatus,
  error?: string,
  sentAt?: Date,
  readAt?: Date
}

export const MailSchema = ss.type({
  _id: ss.optional(ss.string()),
  to: ss.string(),
  from: ss.string(),
  subject: ss.string(),
  fromName: ss.optional(ss.string()),
  body: ss.optional(ss.string()),
  templateId: ss.optional(ss.string()),
  customArgs: ss.optional(ss.record(ss.string(), ss.any())),
  dynamicTemplateData: ss.optional(ss.record(ss.string(), ss.any())),
  communication: ss.optional(ss.string()),
  sendGridMessageId: ss.optional(ss.string()),
  status: ss.enums(Object.values(EMailStatus)),
  error: ss.optional(ss.string()),
  sentAt: ss.optional(ss.date()),
  readAt: ss.optional(ss.date())
})

export interface IBatchMail {
  _id?: string;
  communication?: TDocRef<ICommunication>;
  status: EMailStatus;
  total: number;
  sent: number;
  failed: number;
  startedAt: Date;
  completedAt?: Date;
  error?: string;
  mails?: TDocRef<IMail>[];
  from: string;
  fromName?: string;
  to: string[];
  subject: string;
  body?: string;
  templateId?: string;
  customArgs?: {[key: string]: any};
  dynamicTemplateData?: {[key: string]: any};
  sendGridBatchId?: string;
}

export const BatchMailSchema = ss.type({
  _id: ss.optional(ss.string()),
  communication: ss.optional(ss.string()),
  status: ss.enums(Object.values(EMailStatus)),
  total: ss.number(),
  sent: ss.number(),
  failed: ss.number(),
  startedAt: ss.date(),
  completedAt: ss.optional(ss.date()),
  error: ss.optional(ss.string()),
  mails: ss.optional(ss.array(ss.string())),
  from: ss.string(),
  fromName: ss.optional(ss.string()),
  to: ss.array(ss.string()),
  subject: ss.string(),
  body: ss.optional(ss.string()),
  templateId: ss.optional(ss.string()),
  customArgs: ss.optional(ss.record(ss.string(), ss.any())),
  dynamicTemplateData: ss.optional(ss.record(ss.string(), ss.any())),
  sendGridBatchId: ss.optional(ss.string())
})
