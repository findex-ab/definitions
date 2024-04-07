export enum EUserRole {
  INVESTOR = 'Investor',
  SUPER_ADMIN = 'Super Admin'
};


export type UserRole = {
  id: string;
  name: string;
  description: string;
}

export type FindexUserRole = Omit<UserRole, 'id'> & {
  externalId: string;
}
