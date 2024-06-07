import { DocumentId } from "./documentId";
import { ObjectId, ObjectIdLike } from 'bson';
import * as ss from 'superstruct';
type ID = string | ObjectId | ObjectIdLike;
export type TDocRef<T extends {
    [key: string]: any;
} = {
    [key: string]: any;
}, _IdType = DocumentId> = {
    _id: ID;
} | ({
    _id: ID;
} & T) | ID;
export declare const DocRefSchema: <T extends {
    [key: string]: any;
} = {
    [key: string]: any;
}>() => ss.Describe<TDocRef<T, DocumentId>>;
export declare const RefSchema: ss.Struct<string | {
    _id: string;
}, null>;
export declare const getRefId: (x: any) => string;
export declare const isDocRef: <T extends {
    [key: string]: any;
} = {
    [key: string]: any;
}>(x: any) => x is TDocRef<T, DocumentId>;
export {};
