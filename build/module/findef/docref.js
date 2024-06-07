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
        throw new Error(`unable to get ID`);
    if (typeof x._id === 'string')
        return x._id;
    if (typeof x.id === 'string')
        return x._id;
    throw new Error(`unable to get ID`);
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
