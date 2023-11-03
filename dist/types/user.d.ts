import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment } from "./investment";
import z from 'zod';
export declare enum EUserStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export interface IUser {
    authUserId?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    password?: string;
    investments?: IInvestment[];
    administratedAssets?: TDocRef<IAsset>[];
    status?: EUserStatus;
}
export declare const UserSchema: z.ZodObject<{
    authUserId: z.ZodOptional<z.ZodString>;
    firstname: z.ZodOptional<z.ZodString>;
    lastname: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    investments: z.ZodArray<z.ZodObject<{
        asset: z.ZodString;
        invested: z.ZodObject<{
            value: z.ZodNumber;
            type: z.ZodOptional<z.ZodString>;
            percentage: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value?: number;
            type?: string;
            percentage?: number;
        }, {
            value?: number;
            type?: string;
            percentage?: number;
        }>;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        asset?: string;
        invested?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        quantity?: number;
    }, {
        asset?: string;
        invested?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        quantity?: number;
    }>, "many">;
    administratedAssets: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authUserId?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    password?: string;
    investments?: {
        asset?: string;
        invested?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        quantity?: number;
    }[];
    administratedAssets?: string[];
    status?: string;
}, {
    authUserId?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    password?: string;
    investments?: {
        asset?: string;
        invested?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        quantity?: number;
    }[];
    administratedAssets?: string[];
    status?: string;
}>;
export type IInvestor = IUser;
