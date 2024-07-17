import { AuthJWT } from "./auth";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { WorldLocation } from "./worldLocation";

export type IFindexSession = {
  token: string;
  expiryDate: Date;
  user: TDocRef<IUser>;
  jwt: AuthJWT;
  location?: Partial<WorldLocation>;
}
