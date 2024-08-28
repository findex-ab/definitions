import { TDocRef } from "./docref";
import { IUser } from "./user";
export type IReferral = {
    firstname: string;
    lastname: string;
    email: string;
    createdBy: TDocRef<IUser>;
    note?: string;
};
