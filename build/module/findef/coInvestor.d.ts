import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IUser } from './user';
import { IInvestment } from './investment';
export declare enum ECoInvestorRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}
export type ICoInvestor = {
    user?: TDocRef<IUser>;
    investment: TDocRef<IInvestment>;
    userData?: {
        firstname: string;
        lastname: string;
        email: string;
    };
    fraction: number;
    role: ECoInvestorRole;
};
export declare const CoInvestorSchema: ss.Struct<{
    fraction: number;
    role: string;
    user?: any;
    investment?: any;
    userData?: {
        firstname: string;
        lastname: string;
        email: string;
    } | undefined;
}, {
    user: ss.Struct<any, null>;
    investment: ss.Struct<any, null>;
    fraction: ss.Struct<number, null>;
    role: ss.Struct<string, {
        [x: string]: string;
    }>;
    userData: ss.Struct<{
        firstname: string;
        lastname: string;
        email: string;
    } | undefined, {
        firstname: ss.Struct<string, null>;
        lastname: ss.Struct<string, null>;
        email: ss.Struct<string, null>;
    }>;
}>;
