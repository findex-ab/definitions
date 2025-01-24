import { ETimeDifferenceUnit } from "./timeDifference";
import * as fns from 'date-fns';
export var ELiabilitySubtype;
(function (ELiabilitySubtype) {
    ELiabilitySubtype["MORTAGE"] = "MORTAGE";
    ELiabilitySubtype["BOND"] = "BOND";
    ELiabilitySubtype["OTHER"] = "OTHER";
    ELiabilitySubtype["STOCK_OPTIONS"] = "STOCK_OPTIONS";
    ELiabilitySubtype["SHARES"] = "SHARES";
    ELiabilitySubtype["REAL_ESTATE"] = "REAL_ESTATE";
    ELiabilitySubtype["GOLD"] = "GOLD";
    ELiabilitySubtype["GUARANTOR"] = "GUARANTOR";
})(ELiabilitySubtype || (ELiabilitySubtype = {}));
export var ELiabilityType;
(function (ELiabilityType) {
    ELiabilityType["DEBT"] = "DEBT";
    ELiabilityType["CREDIT"] = "CREDIT";
})(ELiabilityType || (ELiabilityType = {}));
export const calculateRemainingDebtAndInterest = (loanDetails) => {
    const { borrowedAmount, yearlyInterestRate, alreadyAmortized, loanIssueDate, loanTerm, 
    // amortizationSchedule,
    // paymentAmount,
    // paymentFrequency,
    quantity } = loanDetails;
    // const now = new Date()
    const loanEndDate = new Date(loanIssueDate);
    loanEndDate.setFullYear(loanIssueDate.getFullYear() + loanTerm);
    // Calculate remaining debt
    let remainingDebt = (borrowedAmount * quantity) - alreadyAmortized;
    // if (amortizationSchedule) {
    //   const monthsPassed = Math.floor(
    //     (now.getTime() - loanIssueDate.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
    //   )
    //   const paymentsMade = Math.floor(monthsPassed / (12 / paymentFrequency)) // Total payments made so far
    //   const totalPaidPrincipal = paymentsMade * paymentAmount
    //   remainingDebt -= totalPaidPrincipal
    // }
    // Calculate remaining interest
    //const totalInterest = borrowedAmount * (yearlyInterestRate / 100) * loanTerm
    const totalInterest = remainingDebt * (yearlyInterestRate / 100) * loanTerm;
    let remainingInterest = totalInterest;
    // if (amortizationSchedule) {
    //   const interestPaidSoFar =
    //     (totalInterest / loanTerm) * (now.getFullYear() - loanIssueDate.getFullYear())
    //   remainingInterest -= interestPaidSoFar
    // }
    // Ensure remaining values are not negative
    remainingDebt = Math.max(0, remainingDebt);
    remainingInterest = Math.max(0, remainingInterest);
    return {
        remainingDebt: remainingDebt,
        remainingInterest: remainingInterest * quantity
    };
};
export const calculateLiabilityRemainingDebtAndInterest = (liab, hasAmortizationSchedule = true) => {
    return calculateRemainingDebtAndInterest({
        alreadyAmortized: liab.alreadyAmortized?.value || 0,
        amortizationSchedule: !!hasAmortizationSchedule,
        borrowedAmount: liab.amount?.value || 0,
        loanIssueDate: new Date(liab.issueDate || new Date()) || new Date(),
        loanTerm: liab.loanTerm?.length || 0,
        paymentAmount: liab.paymentSchedule?.value?.value || 0,
        paymentFrequency: liab.paymentSchedule?.occurrence?.unit == ETimeDifferenceUnit.YEAR
            ? 1
            : liab.paymentSchedule?.occurrence?.unit == ETimeDifferenceUnit.HALF_YEAR
                ? 2
                : liab.paymentSchedule?.occurrence?.unit == ETimeDifferenceUnit.MONTH
                    ? 12
                    : liab.paymentSchedule?.occurrence?.unit == ETimeDifferenceUnit.WEEK
                        ? 52
                        : liab.paymentSchedule?.occurrence?.unit == ETimeDifferenceUnit.DAY
                            ? 360
                            : 1,
        yearlyInterestRate: liab.interestRate || 0,
        quantity: liab.quantity ?? 0.0
    });
};
export const calculateLiabilityExpirationDate = (liab) => {
    const start = liab.issueDate;
    if (!start)
        return null;
    const term = liab.loanTerm;
    const schedule = liab.paymentSchedule;
    const length = term?.length || schedule?.occurrence?.length;
    if (typeof length !== 'number')
        return null;
    const unit = term?.unit || schedule?.occurrence?.unit;
    if (!unit)
        return null;
    let end = new Date(start);
    switch (unit) {
        case ETimeDifferenceUnit.HALF_YEAR:
            {
                end = fns.addYears(end, length * 0.5);
            }
            ;
            break;
        case ETimeDifferenceUnit.MONTH:
            {
                end = fns.addMonths(end, length);
            }
            ;
            break;
        case ETimeDifferenceUnit.WEEK:
            {
                end = fns.addWeeks(end, length);
            }
            ;
            break;
        case ETimeDifferenceUnit.DAY:
            {
                end = fns.addDays(end, length);
            }
            ;
            break;
        default:
        case ETimeDifferenceUnit.YEAR:
            {
                end = fns.addYears(end, length);
            }
            ;
            break;
    }
    return end;
};
