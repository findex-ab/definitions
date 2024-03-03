import { AssetSchema, IAsset } from "./asset";
import { IDBModel } from "./dbModel";
import { TDocRef } from "./docref";
import { DocumentId } from "./documentId";
import * as ss from 'superstruct';

export interface IAssetExtendedAttributes {
  automaticLogo?: boolean;
}

const AssetExtendedAttributesSchema = ss.type({
  automaticLogo: ss.optional(ss.boolean())
});

export interface IAssetPreference extends IDBModel {
  userId: DocumentId;
  real: TDocRef<IAsset>;
  modified: Partial<IAsset & IAssetExtendedAttributes>;
};


export const AssetPreferencesSchema = ss.type({
  userId: ss.optional(ss.string()),
  modified: ss.optional(ss.partial(ss.assign(AssetSchema, AssetExtendedAttributesSchema)))
})
