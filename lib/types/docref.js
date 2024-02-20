import { DocumentIdSchema } from "./documentId";
import { SavedDocumentSchemaType } from "./savedDocument";
import * as ss from 'superstruct';
export const DocRefSchema = () => ss.union([DocumentIdSchema, SavedDocumentSchemaType()]);
//# sourceMappingURL=docref.js.map