import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { ICommunication } from './communication';
export declare enum MailTemplate {
    EARLY_ACCESS_INVITE = "d-f55f7b67bad148c3a2167d549c3b82d1",
    VERIFY_EMAIL_WITH_CODE = "d-a3ef05a79f0c4671b708556bfb10f8cd",
    VERIFY_EMAIL_WITHOUT_CODE = "d-4c5cff40a77a4d14a4eda8077280e459",
    SHAREHOLDER_INVITE_NEW_USER = "d-adc7ca03bcdb488891950b0f4c5276d0",
    SHAREHOLDER_INVITE_EXISITING_USER = "d-82b58d4365384318a6da7dd44524858e",
    SUPERADMIN_INVITE_IR_ADMIN_NEW_USER = "d-f9da809b556241fc9f41534f467d5a26",
    SUPERADMIN_INVITE_IR_ADMIN_EXISTING_USER = "d-16906d6ed3a744169a6edcd13ed91a51",
    IR_ADMIN_INVITE_IR_ADMIN_NEW_USER = "d-6aa6221a6656458387eb0260fdf360f5",
    IR_ADMIN_INVITE_IR_ADMIN_EXISTING_USER = "d-71b830cf50a148a5845f222682bf9423",
    INVESTOR_UPDATE_FULL = "d-905df082a89f41c5aa36a54ee73010ef",
    INVESTOR_UPDATE_NOTIFICATION = "d-4d0fa787eff54086980320dc09232de2",
    INVITE_CO_INVESTOR = "d-c745c4d9aa114f36b3e3a0a5425fa9cf",
    OPPORTUNITY_INQUIRE_RECEIPT = "d-d7541d1c7d624ca7b100cfeba5fae81f",
    REFERRAL_INVESTOR = "d-a462bc77cd1343db965d2328b4410386",
    REFERRAL_COMPANY_ADMIN = "d-a348a6992bf24f29aaa6d78e32f5a134"
}
export declare enum EMailStatus {
    QUEUED = "QUEUED",
    SENDING = "SENDING",
    SENT = "SENT",
    FAILED = "FAILED",
    OPENED = "OPENED"
}
export interface IMailAttachment {
    content: any;
    filename: string;
    type: string;
    disposition: 'attachment';
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
    customArgs?: {
        [key: string]: any;
    };
    dynamicTemplateData?: {
        [key: string]: any;
    };
    communication?: TDocRef<ICommunication>;
    batchMail?: TDocRef<IBatchMail>;
    sendGridMessageId?: string;
    status?: EMailStatus;
    error?: string;
    sentAt?: Date;
    readAt?: Date;
}
export declare const MailSchema: ss.Struct<{
    status: EMailStatus;
    to: string;
    from: string;
    subject: string;
    _id?: string | undefined;
    body?: string | undefined;
    attachments?: any[] | undefined;
    fromName?: string | undefined;
    templateId?: string | undefined;
    customArgs?: Record<string, any> | undefined;
    dynamicTemplateData?: Record<string, any> | undefined;
    communication?: string | undefined;
    sendGridMessageId?: string | undefined;
    error?: string | undefined;
    sentAt?: Date | undefined;
    readAt?: Date | undefined;
}, {
    _id: ss.Struct<string | undefined, null>;
    to: ss.Struct<string, null>;
    from: ss.Struct<string, null>;
    subject: ss.Struct<string, null>;
    fromName: ss.Struct<string | undefined, null>;
    body: ss.Struct<string | undefined, null>;
    attachments: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
    templateId: ss.Struct<string | undefined, null>;
    customArgs: ss.Struct<Record<string, any> | undefined, null>;
    dynamicTemplateData: ss.Struct<Record<string, any> | undefined, null>;
    communication: ss.Struct<string | undefined, null>;
    sendGridMessageId: ss.Struct<string | undefined, null>;
    status: ss.Struct<EMailStatus, {
        QUEUED: EMailStatus.QUEUED;
        SENDING: EMailStatus.SENDING;
        SENT: EMailStatus.SENT;
        FAILED: EMailStatus.FAILED;
        OPENED: EMailStatus.OPENED;
    }>;
    error: ss.Struct<string | undefined, null>;
    sentAt: ss.Struct<Date | undefined, null>;
    readAt: ss.Struct<Date | undefined, null>;
}>;
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
    customArgs?: {
        [key: string]: any;
    };
    dynamicTemplateData?: {
        [key: string]: any;
    };
    sendGridBatchId?: string;
}
export declare const BatchMailSchema: ss.Struct<{
    status: EMailStatus;
    to: string[];
    from: string;
    subject: string;
    total: number;
    sent: number;
    failed: number;
    startedAt: Date;
    _id?: string | undefined;
    body?: string | undefined;
    attachments?: any[] | undefined;
    fromName?: string | undefined;
    templateId?: string | undefined;
    customArgs?: Record<string, any> | undefined;
    dynamicTemplateData?: Record<string, any> | undefined;
    communication?: string | undefined;
    error?: string | undefined;
    completedAt?: Date | undefined;
    mails?: string[] | undefined;
    sendGridBatchId?: string | undefined;
}, {
    _id: ss.Struct<string | undefined, null>;
    communication: ss.Struct<string | undefined, null>;
    status: ss.Struct<EMailStatus, {
        QUEUED: EMailStatus.QUEUED;
        SENDING: EMailStatus.SENDING;
        SENT: EMailStatus.SENT;
        FAILED: EMailStatus.FAILED;
        OPENED: EMailStatus.OPENED;
    }>;
    total: ss.Struct<number, null>;
    sent: ss.Struct<number, null>;
    failed: ss.Struct<number, null>;
    startedAt: ss.Struct<Date, null>;
    completedAt: ss.Struct<Date | undefined, null>;
    error: ss.Struct<string | undefined, null>;
    mails: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    from: ss.Struct<string, null>;
    fromName: ss.Struct<string | undefined, null>;
    to: ss.Struct<string[], ss.Struct<string, null>>;
    subject: ss.Struct<string, null>;
    body: ss.Struct<string | undefined, null>;
    attachments: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
    templateId: ss.Struct<string | undefined, null>;
    customArgs: ss.Struct<Record<string, any> | undefined, null>;
    dynamicTemplateData: ss.Struct<Record<string, any> | undefined, null>;
    sendGridBatchId: ss.Struct<string | undefined, null>;
}>;
