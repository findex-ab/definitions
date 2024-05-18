import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';
export declare enum EKeyCodeType {
    UNKNOWN = "UNKNOWN",
    BETA_CODE = "BETA_CODE",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}
export type IKeyCode = {
    value: string;
    hashInput: bigint;
    type?: EKeyCodeType;
    consumed?: boolean;
    consumedDate?: Date;
    expiryDate?: Date;
    reusable?: boolean;
    createdBy?: TDocRef<IUser>;
    data?: any;
};
export type GenerateKeyCodeRequest = {
    entropy?: string | number;
    format?: string;
    timeToLiveSeconds?: number;
    type?: EKeyCodeType;
    count?: number;
    reusable?: boolean;
    data?: any;
};
export type ConsumeKeyCodeRequest = {
    type?: EKeyCodeType;
};
export declare const GenerateKeyCodeRequestSchema: ss.Describe<GenerateKeyCodeRequest>;
