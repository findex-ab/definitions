import { TDocRef } from "./docref"
import { IUser } from "./user"

export enum EApplicationEventType {
  CREATE_INVESTMENT = 'CREATE_INVESTMENT',
  CREATE_ASSET = 'CREATE_ASSET',
  EDIT_INVESTMENT = 'EDIT_INVESTMENT',
  EDIT_ASSET = 'EDIT_ASSET',
  DELETE_INVESTMENT = 'DELETE_INVESTMENT',
  DELETE_ASSET = 'DELETE_ASSET',
  PROVIDER_IMPORT = 'PROVIDER_IMPORT',
  RESOLVE_INVITE = 'RESOLVE_INVITE',
  INVITE_ALREADY_RESOLVED = 'INVITE_ALREADY_RESOLVED',
  EDIT_USER_PROFILE = 'EDIT_USER_PROFILE'
}

type Dict = {[key: string]: any};

export type IApplicationEvent<T extends Dict = Dict> = {
  triggeredBy: TDocRef<IUser>;
  type: EApplicationEventType;
  tags: string[];
  payload: T;
}
