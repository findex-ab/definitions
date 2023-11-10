"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentIdSchema = exports.ObjectIdSchemaType = void 0;
const superstruct_1 = require("superstruct");
exports.ObjectIdSchemaType = superstruct_1.default.define('ObjectId', (value, context) => {
    if (!value)
        return false;
    if (typeof value === 'string' || typeof value === 'number')
        return false;
    if (typeof value === 'object')
        return Object.hasOwn(value, '_id') || Object.hasOwn(value, '_bsontype');
    return false;
});
exports.DocumentIdSchema = superstruct_1.default.union([superstruct_1.default.string(), exports.ObjectIdSchemaType]);
