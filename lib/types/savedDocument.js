import { ObjectIdSchemaType } from "./documentId";
import * as ss from 'superstruct';
export const SavedDocumentSchemaType = () => ss.union([ss.any(), ObjectIdSchemaType]);
//# sourceMappingURL=savedDocument.js.map