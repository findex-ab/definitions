"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedDocumentSchemaType = void 0;
const documentId_1 = require("./documentId");
const superstruct_1 = require("superstruct");
const SavedDocumentSchemaType = () => superstruct_1.default.union([superstruct_1.default.any(), documentId_1.ObjectIdSchemaType]);
exports.SavedDocumentSchemaType = SavedDocumentSchemaType;
