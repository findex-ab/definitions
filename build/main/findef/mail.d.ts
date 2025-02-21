import * as ss from 'superstruct';
export declare enum EMailStatus {
    QUEUED = "QUEUED",
    SENDING = "SENDING",
    SENT = "SENT",
    FAILED = "FAILED"
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
    communication?: string;
    batchMail?: string;
    sendGridMessageId?: string;
    status: EMailStatus;
    error?: string;
    sentAt?: Date;
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
    }>;
    error: ss.Struct<string | undefined, null>;
    sentAt: ss.Struct<Date | undefined, null>;
}>;
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
export declare const BatchMailSchema: ss.Struct<{
    status: EMailStatus;
    total: number;
    sent: number;
    failed: number;
    startedAt: Date;
    _id?: string | undefined;
    communication?: string | undefined;
    error?: string | undefined;
    completedAt?: Date | undefined;
    mails?: string[] | undefined;
}, {
    _id: ss.Struct<string | undefined, null>;
    communication: ss.Struct<string | undefined, null>;
    status: ss.Struct<EMailStatus, {
        QUEUED: EMailStatus.QUEUED;
        SENDING: EMailStatus.SENDING;
        SENT: EMailStatus.SENT;
        FAILED: EMailStatus.FAILED;
    }>;
    total: ss.Struct<number, null>;
    sent: ss.Struct<number, null>;
    failed: ss.Struct<number, null>;
    startedAt: ss.Struct<Date, null>;
    completedAt: ss.Struct<Date | undefined, null>;
    error: ss.Struct<string | undefined, null>;
    mails: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
}>;
