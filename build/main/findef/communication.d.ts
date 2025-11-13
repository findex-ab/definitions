import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IAsset } from './asset';
import { IUser } from './user';
import { IAttachment } from './attachment';
import { IBatchMail } from './mail';
export declare enum ECommunicationStatus {
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
    attachments: IAttachment[];
    isDraft: boolean;
    shouldSendEmail: boolean;
    publishedAt?: Date;
    createdBy: TDocRef<IUser>;
    showInAssetPage: boolean;
    inAppReadBy: TDocRef<IUser>[];
    emailReadBy: TDocRef<IUser>[];
    batchMail?: TDocRef<IBatchMail>;
    bannerColor?: string;
}
export declare const CommunicationSchema: ss.Struct<{
    createdBy: string;
    body: string;
    status: string;
    attachments: any[];
    asset: string;
    recepients: string[];
    headline: string;
    isDraft: boolean;
    shouldSendEmail: boolean;
    showInAssetPage: boolean;
    inAppReadBy: string[];
    emailReadBy: string[];
    bannerColor?: string | undefined;
    sender?: string | undefined;
    version?: string | undefined;
    publishedAt?: Date | undefined;
    batchMail?: string | undefined;
}, {
    asset: ss.Struct<string, null>;
    sender: ss.Struct<string | undefined, null>;
    recepients: ss.Struct<string[], ss.Struct<string, null>>;
    headline: ss.Struct<string, null>;
    body: ss.Struct<string, null>;
    version: ss.Struct<string | undefined, null>;
    status: ss.Struct<string, {
        [x: string]: string;
    }>;
    attachments: ss.Struct<any[], ss.Struct<any, null>>;
    isDraft: ss.Struct<boolean, null>;
    shouldSendEmail: ss.Struct<boolean, null>;
    publishedAt: ss.Struct<Date | undefined, null>;
    createdBy: ss.Struct<string, null>;
    showInAssetPage: ss.Struct<boolean, null>;
    inAppReadBy: ss.Struct<string[], ss.Struct<string, null>>;
    emailReadBy: ss.Struct<string[], ss.Struct<string, null>>;
    batchMail: ss.Struct<string | undefined, null>;
    bannerColor: ss.Struct<string | undefined, null>;
}>;
