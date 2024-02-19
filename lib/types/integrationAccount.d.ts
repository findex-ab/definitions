export interface IntegrationAccount {
    providerAccountId: string;
    providerAccountType: string;
    owner: boolean;
    providerAccountNumber: string;
    name: string;
    type: string;
    subType: string;
    balance: {
        amt: number;
        cy: string;
    };
    totalValue: {
        amt: number;
        cy: string;
    };
    provider: string;
    providerAccountCreated: string;
    raw: string;
}
