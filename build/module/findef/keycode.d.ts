import { TDocRef } from "./docref";
import { IUser } from "./user";
export type IKeyCode = {
    value: string;
    hashInput: number;
    consumed?: boolean;
    consumedDate?: Date;
    expiryDate?: Date;
    createdBy?: TDocRef<IUser>;
};
