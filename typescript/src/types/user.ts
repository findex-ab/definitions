export interface IUser {
  id: string;
  firstName?: string;
  lastName?: string;
  personalNumber?: string;
  email?: string;
}

export interface IPendingUser extends Partial<IUser> { }
