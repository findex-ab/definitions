import { IntegrationPosition } from "./integrationPosition"

export interface IntegrationAccount {
  providerAccountId: string
  providerAccountType: string
  owner: boolean
  providerAccountNumber: string
  name: string
  type: string
  subType: string
  balance: {
    amt: number
    cy: string
  },
  cashBalance: {
    amt: number
    cy: string
  },
  totalValue: {
    amt: number
    cy: string
  }
  provider: string
  providerAccountCreated: string
  raw: string
}

export type IntegrationAccountWithPositions = IntegrationAccount & {
  positions: IntegrationPosition[];
}
