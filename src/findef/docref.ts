import { DocumentId, DocumentIdSchema } from "./documentId";
import { SavedDocumentSchemaType } from "./savedDocument";
import { ObjectId, ObjectIdLike } from 'bson';
import * as ss from 'superstruct';

type ID = string | ObjectId | ObjectIdLike;
export type TDocRef<T extends {[key: string]: any} = {[key: string]: any}, _IdType = DocumentId> = {_id: ID} | ({_id: ID} & T) | ID;//DocumentId | ISavedDocument<T, IdType>;

export const DocRefSchema = <T extends {[key: string]: any} = {[key: string]: any}>(): ss.Describe<TDocRef<T>> => ss.union([DocumentIdSchema, SavedDocumentSchemaType<T>()]) as ss.Describe<TDocRef<T>>;

export const RefSchema = ss.union([ss.string(), ss.type({
  _id: ss.string()
})])

export const getRefId = (x: any): string => {
  if (typeof x === 'string') return x;
  if (typeof x !== 'object') throw new Error(`unable to get ID`);
  if (typeof x._id === 'string') return x._id as string;
  if (typeof x.id === 'string') return x._id as string;
  throw new Error(`unable to get ID from ${x} (type ${typeof x})`);
}

export const isDocRef = <T extends {[key: string]: any} = {[key: string]: any}>(x: any): x is TDocRef<T> => {
  if (!x) return false;
  if (typeof x === 'string') return true;
  if (typeof x !== 'object') return false;
  return !!x._id;
}
