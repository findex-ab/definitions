import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IUser } from './user';
import { IInvestment } from './investment';
import { IInvite } from './invite';
export declare enum ECoInvestorRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}
export type ICoInvestor = {
    user?: TDocRef<IUser>;
    invite?: TDocRef<IInvite>;
    investment: TDocRef<IInvestment>;
    userData?: {
        firstname: string;
        lastname: string;
        email: string;
        color?: string;
    };
    fraction: number;
    role: ECoInvestorRole;
};
export declare const CoInvestorSchema: ss.Struct<{
    role: string;
    fraction: number;
    user?: any;
    investment?: any;
    userData?: {
        firstname: string;
        lastname: string;
        email: string;
        color?: string | undefined;
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
        color?: string | undefined;
    } | undefined, {
        firstname: ss.Struct<string, null>;
        lastname: ss.Struct<string, null>;
        email: ss.Struct<string, null>;
        color: ss.Struct<string | undefined, null>;
    }>;
}>;
export type UpdateCoInvestorsRequest = {
    coInvestors: ICoInvestor[];
};
