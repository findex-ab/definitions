import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IAsset } from './asset';
import { IUser } from './user';
import { IAttachment } from './attachment';
export declare enum ECommunicationStatus {
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
    createdBy: TDocRef<IUser>;
    showInAssetPage: boolean;
    inAppReadBy: TDocRef<IUser>[];
    emailReadBy: TDocRef<IUser>[];
}
export declare const CommunicationSchema: ss.Struct<{
    asset: string;
    status: string;
    createdBy: string;
    body: string;
    sender: string;
    recepients: string[];
    headline: string;
    attachments: any[];
    isDraft: boolean;
    shouldSendEmail: boolean;
    showInAssetPage: boolean;
    inAppReadBy: string[];
    emailReadBy: string[];
    publishedAt?: Date | undefined;
}, {
    asset: ss.Struct<string, null>;
    sender: ss.Struct<string, null>;
    recepients: ss.Struct<string[], ss.Struct<string, null>>;
    headline: ss.Struct<string, null>;
    body: ss.Struct<string, null>;
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
}>;
