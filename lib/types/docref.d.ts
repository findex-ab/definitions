import { DocumentId } from "./documentId";
import { ISavedDocument } from "./savedDocument";
import ss from 'superstruct';
export type TDocRef<T, IdType = DocumentId> = DocumentId | ISavedDocument<T, IdType>;
export declare const DocRefSchema: <T>() => ss.Describe<TDocRef<T, DocumentId>>;
