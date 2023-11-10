import { ObjectId } from 'bson';
import * as ss from 'superstruct';

export type DocumentId = string | ObjectId;


const has = <T extends {[key: string]: any} = {}>(a: NonNullable<T>, key: string): boolean => !!(key in a);

export const ObjectIdSchemaType = ss.define<ObjectId>('ObjectId', (value: unknown, context: ss.Context) => {
  if (!value) return false;
  if (typeof value === 'string' || typeof value === 'number') return false;
  if (typeof value === 'object') return has(value, '_id') || has(value, '_bsontype');
  return false;
});

export const DocumentIdSchema: ss.Describe<DocumentId> = ss.union([ss.string(), ObjectIdSchemaType]);
