import { describe, it } from 'node:test';
import {
  calculateLiabilityRemainingDebtAndInterest,
  ETimeDifferenceUnit,
  ILiability,
} from '../../../src/findef';
import assert from 'node:assert';

const createLiab = (liab: Partial<ILiability>): Omit<ILiability, 'user'> => ({
  ...liab,
  name: liab.name || '',
  alreadyAmortized: liab.alreadyAmortized || { value: 0, type: 'SEK' },
  amount: liab.amount || { value: 0, type: 'SEK' },
  interestRate: liab.interestRate ?? 0,
  issueDate: liab.issueDate || new Date(),
  loanTerm: liab.loanTerm || { length: 1, unit: ETimeDifferenceUnit.YEAR },
  quantity: liab.quantity ?? 0,
  value: liab.value || { value: 0, type: 'SEK' },
});

type ResultExpect<T, R> = {
  input: T;
  output: R;
};

describe('Test calculateLiabilityRemainingDebtAndInterest', () => {
  const cases: ResultExpect<
    Omit<ILiability, 'user'>,
    ReturnType<typeof calculateLiabilityRemainingDebtAndInterest>
  >[] = [
    {
      input: createLiab({}),
      output: { remainingDebt: 0, remainingInterest: 0 },
    },
    {
      input: createLiab({
        amount: { value: 300, type: 'SEK' },
        alreadyAmortized: { value: 100, type: 'SEK' },
        interestRate: 100,
        quantity: 0.5
      }),
      output: { remainingDebt: 50, remainingInterest: 25 },
    },
    {
      input: createLiab({
        alreadyAmortized: {
          value: 500,
          type: 'SEK',
        },
        amount: {
          value: 10000,
          type: 'SEK',
        },
        interestRate: 50,
        loanTerm: {
          length: 1,
          unit: ETimeDifferenceUnit.YEAR,
        },
        quantity: 1.0,
      }),
      output: {
        remainingDebt: 9500,
        remainingInterest: 4750,
      },
    },
  ];

  it('Should return expected values', () => {
    for (let i = 0; i < cases.length; i++) {
      const c = cases[i];
      const got = calculateLiabilityRemainingDebtAndInterest(
        c.input,
        !!c.input.hasPaymentSchedule,
      );
      assert.deepEqual(got, c.output);
    }
  });
});
