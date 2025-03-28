import { TDocRef } from "./docref";
import { IUser } from "./user";
export declare enum EApplicationEventType {
    CREATE_USER_ACCOUNT = "CREATE_USER_ACCOUNT",
    CREATE_INVESTMENT = "CREATE_INVESTMENT",
    CREATE_ASSET = "CREATE_ASSET",
    EDIT_INVESTMENT = "EDIT_INVESTMENT",
    EDIT_ASSET = "EDIT_ASSET",
    DELETE_INVESTMENT = "DELETE_INVESTMENT",
    DELETE_ASSET = "DELETE_ASSET",
    DELETE_ATTACHMENT = "DELETE_ATTACHMENT",
    CREATE_ATTACHMENT = "CREATE_ATTACHMENT",
    UPDATE_ATTACHMENT = "UPDATE_ATTACHMENT",
    FILE_TRANSACTION_COMPLETE = "FILE_TRANSACTION_COMPLETE",
    PROVIDER_IMPORT = "PROVIDER_IMPORT",
    MANUAL_PROVIDER_IMPORT = "MANUAL_PROVIDER_IMPORT",
    AUTOMATIC_PROVIDER_IMPORT = "AUTOMATIC_PROVIDER_IMPORT",
    RESOLVE_INVITE = "RESOLVE_INVITE",
    INVITE_ALREADY_RESOLVED = "INVITE_ALREADY_RESOLVED",
    EDIT_USER_PROFILE = "EDIT_USER_PROFILE",
    AUTOMATIC_ASSET_UPDATE = "AUTOMATIC_ASSET_UPDATE"
}
type Dict = {
    [key: string]: any;
};
export type IApplicationEvent<T extends Dict = Dict> = {
    triggeredBy: TDocRef<IUser>;
    user?: TDocRef<IUser>;
    type: EApplicationEventType;
    tags: string[];
    processed?: boolean;
    processedAt?: Date;
    payload: T;
};
export {};
