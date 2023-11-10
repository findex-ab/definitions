"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedDocumentSchemaType = void 0;
const documentId_1 = require("./documentId");
const ss = require("superstruct");
const SavedDocumentSchemaType = () => ss.union([ss.any(), documentId_1.ObjectIdSchemaType]);
exports.SavedDocumentSchemaType = SavedDocumentSchemaType;
//# sourceMappingURL=savedDocument.js.map