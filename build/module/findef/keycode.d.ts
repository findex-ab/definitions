import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';
export type IKeyCode = {
    value: string;
    hashInput: bigint;
    consumed?: boolean;
    consumedDate?: Date;
    expiryDate?: Date;
    createdBy?: TDocRef<IUser>;
};
export type GenerateKeyCodeRequest = {
    entropy?: string | number;
    format?: string;
    timeToLiveSeconds?: number;
};
export declare const GenerateKeyCodeRequestSchema: ss.Describe<GenerateKeyCodeRequest>;
