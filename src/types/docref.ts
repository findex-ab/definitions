import { DocumentId, DocumentIdSchema } from "./documentId";
import { ISavedDocument, SavedDocumentSchemaType } from "./savedDocument";
import * as ss from 'superstruct';

export type TDocRef<T, IdType = DocumentId> = DocumentId | ISavedDocument<T, IdType>;

export const DocRefSchema = <T>(): ss.Describe<TDocRef<T>> => ss.union([DocumentIdSchema, SavedDocumentSchemaType<T>()]);
