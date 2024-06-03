export declare enum EUserRole {
    INVESTOR = "Investor",
    SUPER_ADMIN = "Super Admin",
    DEVELOPER = "Developer"
}
export type UserRole = {
    id: string;
    name: string;
    description: string;
};
export type FindexUserRole = Omit<UserRole, 'id'> & {
    externalId: string;
};
