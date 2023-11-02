import { DocumentId } from "./documentId";
import { ISavedDocument } from "./savedDocument";

export type TDocRef<T, IdType = DocumentId> = DocumentId | ISavedDocument<T, IdType>;
