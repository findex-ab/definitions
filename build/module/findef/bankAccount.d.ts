import { IntegrationAccount } from "./integrationAccount";
import { IntegrationPosition } from "./integrationPosition";
export type BankAccount = IntegrationAccount & {
    positions: IntegrationPosition[];
};
