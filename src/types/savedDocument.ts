import { DocumentId } from "./documentId";

export type ISavedDocument<T, IdType = DocumentId> = T & {
  _id: IdType;
}
