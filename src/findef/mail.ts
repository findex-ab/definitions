import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { ICommunication } from './communication';

export enum MailTemplate {
  // Regular Invite
  EARLY_ACCESS_INVITE = 'd-f55f7b67bad148c3a2167d549c3b82d1',

  // Verify Email
  VERIFY_EMAIL_WITH_CODE = 'd-a3ef05a79f0c4671b708556bfb10f8cd',
  VERIFY_EMAIL_WITHOUT_CODE = 'd-4c5cff40a77a4d14a4eda8077280e459',

  // Invite Shareholder
  SHAREHOLDER_INVITE_NEW_USER = 'd-adc7ca03bcdb488891950b0f4c5276d0',
  SHAREHOLDER_INVITE_EXISITING_USER = 'd-82b58d4365384318a6da7dd44524858e',

  // Invite Company Admin
  SUPERADMIN_INVITE_IR_ADMIN_NEW_USER = 'd-f9da809b556241fc9f41534f467d5a26',
  SUPERADMIN_INVITE_IR_ADMIN_EXISTING_USER = 'd-16906d6ed3a744169a6edcd13ed91a51',
  IR_ADMIN_INVITE_IR_ADMIN_NEW_USER = 'd-6aa6221a6656458387eb0260fdf360f5',
  IR_ADMIN_INVITE_IR_ADMIN_EXISTING_USER = 'd-71b830cf50a148a5845f222682bf9423',

  // Investor Update
  INVESTOR_UPDATE_FULL = 'd-905df082a89f41c5aa36a54ee73010ef',
  INVESTOR_UPDATE_NOTIFICATION = 'd-4d0fa787eff54086980320dc09232de2',

  // Co-investor Invite
  INVITE_CO_INVESTOR = 'd-c745c4d9aa114f36b3e3a0a5425fa9cf',

  // Opportunity Inquire Order confirmation
  OPPORTUNITY_INQUIRE_RECEIPT = 'd-d7541d1c7d624ca7b100cfeba5fae81f'
}

export enum EMailStatus {
  QUEUED = 'QUEUED',
  SENDING = 'SENDING',
  SENT = 'SENT',
  FAILED = 'FAILED',
  OPENED = 'OPENED'
}

export interface IMailAttachment {
  content: any,
  filename: string,
  type: string,
  disposition: 'attachment'
}

export interface IMail {
  _id?: string;
  to: string;
  from: string;
  subject: string;
  fromName?: string;
  body?: string;
  attachments?: IMailAttachment[];
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
  attachments: ss.optional(ss.array(ss.any())),
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
  attachments?: IMailAttachment[];
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
  attachments: ss.optional(ss.array(ss.any())),
  templateId: ss.optional(ss.string()),
  customArgs: ss.optional(ss.record(ss.string(), ss.any())),
  dynamicTemplateData: ss.optional(ss.record(ss.string(), ss.any())),
  sendGridBatchId: ss.optional(ss.string())
})
