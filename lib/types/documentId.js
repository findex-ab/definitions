"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentIdSchema = exports.ObjectIdSchemaType = void 0;
const ss = require("superstruct");
const has = (a, key) => !!(key in a);
exports.ObjectIdSchemaType = ss.define('ObjectId', (value, context) => {
    if (!value)
        return false;
    if (typeof value === 'object' && (has(value, '_id') || has(value, '__id') || has(value, '_bsontype')))
        return true;
    if (typeof value === 'string' || typeof value === 'number')
        return true;
    return false;
});
exports.DocumentIdSchema = ss.union([ss.string(), exports.ObjectIdSchemaType]);
//# sourceMappingURL=documentId.js.map