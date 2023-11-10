import { ObjectId } from 'bson';
import ss from 'superstruct';

export type DocumentId = string | ObjectId;

export const ObjectIdSchemaType = ss.define<ObjectId>('ObjectId', (value: unknown, context: ss.Context) => {
  if (!value) return false;
  if (typeof value === 'string' || typeof value === 'number') return false;
  if (typeof value === 'object') return Object.hasOwn(value, '_id') || Object.hasOwn(value, '_bsontype');
  return false;
});

export const DocumentIdSchema: ss.Describe<DocumentId> = ss.union([ss.string(), ObjectIdSchemaType]);
