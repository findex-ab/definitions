import * as ss from 'superstruct';

export enum EMailStatus {
  QUEUED = 'QUEUED',
  SENDING = 'SENDING',
  SENT = 'SENT',
  FAILED = 'FAILED'
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
  communication?: string,
  batchMail?: string,
  sendGridMessageId?: string,
  status: EMailStatus,
  error?: string,
  sentAt?: Date
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
  sentAt: ss.optional(ss.date())
})

export interface IBatchMail {
  _id?: string;
  communication?: string;
  status: EMailStatus;
  total: number;
  sent: number;
  failed: number;
  startedAt: Date;
  completedAt?: Date;
  error?: string;
  mails?: string[];
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
  mails: ss.optional(ss.array(ss.string()))
})