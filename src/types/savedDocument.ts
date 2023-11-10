import { DocumentId, ObjectIdSchemaType } from "./documentId";
import ss from 'superstruct';

export type ISavedDocument<T, IdType = DocumentId> = T & {
  _id: IdType;
}

export const SavedDocumentSchemaType = <T>() :ss.Describe<ISavedDocument<T>> => ss.union([ss.any(), ObjectIdSchemaType]);
