import { ObjectId, ObjectIdLike } from 'bson';
import * as ss from 'superstruct';
export type DocumentId = string | ObjectId | ObjectIdLike | Uint8Array | {
    _id: DocumentId;
};
export declare const ObjectIdSchemaType: ss.Struct<ObjectId, null>;
export declare const DocumentIdSchema: ss.Describe<DocumentId>;
