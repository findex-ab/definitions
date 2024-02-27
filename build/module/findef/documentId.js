import * as ss from 'superstruct';
const has = (a, key) => !!(key in a);
export const ObjectIdSchemaType = ss.define('ObjectId', (value) => {
    if (!value)
        return false;
    if (typeof value === 'object' && (has(value, '_id') || has(value, '__id') || has(value, '_bsontype')))
        return true;
    if (typeof value === 'string' || typeof value === 'number')
        return true;
    return false;
});
export const DocumentIdSchema = ss.union([ss.string(), ObjectIdSchemaType]);
