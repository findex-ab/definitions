import { ICompleteIntegrationBankAccount } from './completeIntegrationBankAccount';
import { ICompleteIntegrationPosition } from './completeIntegrationPosition';
import { IIntegrationLoanPart } from './integrationLoanPart';
export type IntegrationLoanPart = IIntegrationLoanPart;
export type IntegrationAccount = ICompleteIntegrationBankAccount;
export type IntegrationAccountWithPositions = IntegrationAccount & {
    positions: ICompleteIntegrationPosition[];
};
