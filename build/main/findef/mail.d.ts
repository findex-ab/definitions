import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { ICommunication } from './communication';
export declare enum EMailStatus {
    QUEUED = "QUEUED",
    SENDING = "SENDING",
    SENT = "SENT",
    FAILED = "FAILED",
    OPENED = "OPENED"
}
export interface IMail {
    _id?: string;
    to: string;
    from: string;
    subject: string;
    fromName?: string;
    body?: string;
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
    total: number;
    to: string[];
    from: string;
    subject: string;
    sent: number;
    failed: number;
    startedAt: Date;
    _id?: string | undefined;
    body?: string | undefined;
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
    templateId: ss.Struct<string | undefined, null>;
    customArgs: ss.Struct<Record<string, any> | undefined, null>;
    dynamicTemplateData: ss.Struct<Record<string, any> | undefined, null>;
    sendGridBatchId: ss.Struct<string | undefined, null>;
}>;
