"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocRefSchema = void 0;
const documentId_1 = require("./documentId");
const savedDocument_1 = require("./savedDocument");
const superstruct_1 = require("superstruct");
const DocRefSchema = () => superstruct_1.default.union([documentId_1.DocumentIdSchema, (0, savedDocument_1.SavedDocumentSchemaType)()]);
exports.DocRefSchema = DocRefSchema;
