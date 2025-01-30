"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDocRef = exports.getRefId = exports.RefSchema = exports.DocRefSchema = void 0;
const documentId_1 = require("./documentId");
const savedDocument_1 = require("./savedDocument");
const ss = __importStar(require("superstruct"));
const DocRefSchema = () => ss.union([documentId_1.DocumentIdSchema, (0, savedDocument_1.SavedDocumentSchemaType)()]);
exports.DocRefSchema = DocRefSchema;
exports.RefSchema = ss.union([ss.string(), ss.type({
        _id: ss.string()
    })]);
const getRefId = (x) => {
    if (typeof x === 'string')
        return x;
    if (typeof x !== 'object')
        return '';
    if (typeof x._id === 'string')
        return x._id;
    if (typeof x.id === 'string')
        return x._id;
    if (typeof x._bsontype === 'string' && x._bsontype === 'ObjectId' && typeof x.toString === 'function')
        return x.toString();
    console.error(x);
    console.error(`unable to get ID from ${x} (type ${typeof x}), returning an empty string instead.`);
    return '';
};
exports.getRefId = getRefId;
const isDocRef = (x) => {
    if (!x)
        return false;
    if (typeof x === 'string')
        return true;
    if (typeof x !== 'object')
        return false;
    return !!x._id;
};
exports.isDocRef = isDocRef;
