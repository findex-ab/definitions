export type IIntegrationLoanPart = {
    id: string;
    name: string;
    contractNumber: string;
    balance: {
        amt: number;
        cy: string;
    };
    amountPaid: {
        amt: number;
        cy: string;
    };
    interestRate: number;
    nextPaymentDate: string;
    expirationDate: string;
    periodicity: string;
    raw: {
        lånenamn: string;
    };
};
