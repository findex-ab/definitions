import { ObjectId, ObjectIdLike } from 'bson';
import * as ss from 'superstruct';

export type DocumentId = string | ObjectId | ObjectIdLike | Uint8Array | {_id: DocumentId};


const has = <T extends {[key: string]: any} = {}>(a: NonNullable<T>, key: string): boolean => !!(key in a);

export const ObjectIdSchemaType = ss.define<ObjectId>('ObjectId', (value: unknown) => {
  if (!value) return false;
  if (typeof value === 'object' && (has(value, '_id') || has(value, '__id') || has(value, '_bsontype'))) return true;
  if (typeof value === 'string' || typeof value === 'number') return true;
  return false;
});

export const DocumentIdSchema: ss.Describe<DocumentId> = ss.union([ss.string(), ObjectIdSchemaType]) as ss.Describe<DocumentId>;
