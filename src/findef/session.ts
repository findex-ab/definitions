import { AuthJWT } from "./auth";
import { TDocRef } from "./docref";
import { IUser } from "./user";

export type IFindexSession = {
  token: string;
  expiryDate: Date;
  user: TDocRef<IUser>;
  jwt: AuthJWT;
}
