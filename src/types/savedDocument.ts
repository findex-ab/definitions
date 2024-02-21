import { DocumentId, ObjectIdSchemaType } from "./documentId";
import * as ss from 'superstruct';

export type ISavedDocument<T, IdType = DocumentId> = T & {
  _id: IdType;
}

export const SavedDocumentSchemaType = <T>() :ss.Describe<ISavedDocument<T>> => ss.union([ss.any(), ObjectIdSchemaType]) as ss.Describe<ISavedDocument<T>>;
