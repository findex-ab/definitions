import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';
export declare enum EKeyCodeType {
    UNKNOWN = "UNKNOWN",
    BETA_CODE = "BETA_CODE"
}
export type IKeyCode = {
    value: string;
    hashInput: bigint;
    type?: EKeyCodeType;
    consumed?: boolean;
    consumedDate?: Date;
    expiryDate?: Date;
    createdBy?: TDocRef<IUser>;
};
export type GenerateKeyCodeRequest = {
    entropy?: string | number;
    format?: string;
    timeToLiveSeconds?: number;
    type?: EKeyCodeType;
    count?: number;
};
export declare const GenerateKeyCodeRequestSchema: ss.Describe<GenerateKeyCodeRequest>;
