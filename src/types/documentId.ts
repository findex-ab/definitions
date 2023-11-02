import { ObjectId } from "bson";
import z from 'zod';

export type DocumentId = string | ObjectId;

export const DocumentIdSchema = z.string().or(z.object({ _id: z.string() }));
