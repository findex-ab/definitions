import { ObjectId } from "bson";
import z from 'zod';
export type DocumentId = string | ObjectId;
export declare const DocumentIdSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    _id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id?: string;
}, {
    _id?: string;
}>]>;
