import { IntegrationPosition } from './integrationPosition';

type IntegrationAccountRaw = {
  id: string;
  categoryId: string;
  cashBalance: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  profit: {
    absolute: {
      value: number;
      unit: string;
      unitType: string;
      decimalPrecision: number;
    };
    relative: {
      value: number;
      unit: string;
      unitType: string;
      decimalPrecision: number;
    };
  };
  totalAcquiredValue: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  type: string;
  totalValue: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  buyingPower: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  buyingPowerWithoutCredit: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  interestRate: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  depositInterestRate: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  loanInterestRate: {
    value: number;
    unit: string;
    unitType: string;
    decimalPrecision: number;
  };
  credit: any;
  name: {
    defaultName: string;
    userDefinedName: string;
  };
  status: string;
  errorStatus: string;
  performance: {
    ONE_WEEK: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    ONE_MONTH: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    THIS_YEAR: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    THREE_YEARS: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    THREE_MONTHS: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    ONE_YEAR: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
    ALL_TIME: {
      absolute: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
      relative: {
        value: number;
        unit: string;
        unitType: string;
        decimalPrecision: number;
      };
    };
  };
  settings: {
    IS_HIDDEN: boolean;
  };
  clearingNumber: string;
  accountNumber: string;
  urlParameterId: string;
  isOvermortgaged: boolean;
  isOverdrawn: boolean;
  isOwner: boolean;
  createdDate: string;
};

export type IntegrationLoanPart = {
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

export interface IntegrationAccount {
  providerAccountId: string;
  providerAccountType: string;
  owner: boolean;
  providerAccountNumber: string;
  name: string;
  type: string;
  subType: string;
  interestRate?: number;
  balance: {
    amt: number;
    cy: string;
  };
  cashBalance: {
    amt: number;
    cy: string;
  };
  totalValue: {
    amt: number;
    cy: string;
  };
  provider: string;
  providerAccountCreated: string;
  raw: IntegrationAccountRaw;
  loanParts?: IntegrationLoanPart[];
}

export type IntegrationAccountWithPositions = IntegrationAccount & {
  positions: IntegrationPosition[];
};
