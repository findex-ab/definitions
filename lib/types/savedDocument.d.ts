import { DocumentId } from "./documentId";
import * as ss from 'superstruct';
export type ISavedDocument<T, IdType = DocumentId> = T & {
    _id: IdType;
};
export declare const SavedDocumentSchemaType: <T>() => ss.Describe<ISavedDocument<T, DocumentId>>;
