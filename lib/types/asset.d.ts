import z from 'zod';
import { ILedger } from ".";
export interface IAsset {
    name: string;
    organizationNumber: string;
    contactEmail: string;
    ledger: ILedger;
    assetId?: string;
}
export declare const AssetSchema: z.ZodObject<{
    name: z.ZodString;
    organizationNumber: z.ZodString;
    contactEmail: z.ZodString;
    ledger: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        sharePrice: z.ZodObject<{
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
        sharesIssued: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        sharePrice?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        sharesIssued?: number;
    }, {
        sharePrice?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        sharesIssued?: number;
    }>>>;
    assetId: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    name?: string;
    organizationNumber?: string;
    contactEmail?: string;
    ledger?: {
        sharePrice?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        sharesIssued?: number;
    };
    assetId?: any;
}, {
    name?: string;
    organizationNumber?: string;
    contactEmail?: string;
    ledger?: {
        sharePrice?: {
            value?: number;
            type?: string;
            percentage?: number;
        };
        sharesIssued?: number;
    };
    assetId?: any;
}>;
export type ICompany = IAsset;
