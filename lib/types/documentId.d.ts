import { ObjectId } from 'bson';
import ss from 'superstruct';
export type DocumentId = string | ObjectId;
export declare const ObjectIdSchemaType: ss.Struct<ObjectId, null>;
export declare const DocumentIdSchema: ss.Describe<DocumentId>;
