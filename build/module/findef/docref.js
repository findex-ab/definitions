import { DocumentIdSchema } from "./documentId";
import { SavedDocumentSchemaType } from "./savedDocument";
import * as ss from 'superstruct';
export const DocRefSchema = () => ss.union([DocumentIdSchema, SavedDocumentSchemaType()]);
export const RefSchema = ss.union([ss.string(), ss.type({
        _id: ss.string()
    })]);
export const getRefId = (x) => {
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
export const isDocRef = (x) => {
    if (!x)
        return false;
    if (typeof x === 'string')
        return true;
    if (typeof x !== 'object')
        return false;
    return !!x._id;
};
