"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLiabilityExpirationDate = exports.calculateLiabilityRemainingDebtAndInterest = exports.calculateRemainingDebtAndInterest = exports.ELiabilityType = exports.ELiabilitySubtype = void 0;
const timeDifference_1 = require("./timeDifference");
const fns = __importStar(require("date-fns"));
var ELiabilitySubtype;
(function (ELiabilitySubtype) {
    ELiabilitySubtype["MORTAGE"] = "MORTAGE";
    ELiabilitySubtype["BOND"] = "BOND";
    ELiabilitySubtype["OTHER"] = "OTHER";
    ELiabilitySubtype["STOCK_OPTIONS"] = "STOCK_OPTIONS";
    ELiabilitySubtype["SHARES"] = "SHARES";
    ELiabilitySubtype["REAL_ESTATE"] = "REAL_ESTATE";
    ELiabilitySubtype["GOLD"] = "GOLD";
    ELiabilitySubtype["GUARANTOR"] = "GUARANTOR";
})(ELiabilitySubtype || (exports.ELiabilitySubtype = ELiabilitySubtype = {}));
var ELiabilityType;
(function (ELiabilityType) {
    ELiabilityType["DEBT"] = "DEBT";
    ELiabilityType["CREDIT"] = "CREDIT";
})(ELiabilityType || (exports.ELiabilityType = ELiabilityType = {}));
const calculateRemainingDebtAndInterest = (loanDetails) => {
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
exports.calculateRemainingDebtAndInterest = calculateRemainingDebtAndInterest;
const calculateLiabilityRemainingDebtAndInterest = (liab, hasAmortizationSchedule = true) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return (0, exports.calculateRemainingDebtAndInterest)({
        alreadyAmortized: ((_a = liab.alreadyAmortized) === null || _a === void 0 ? void 0 : _a.value) || 0,
        amortizationSchedule: !!hasAmortizationSchedule,
        borrowedAmount: ((_b = liab.amount) === null || _b === void 0 ? void 0 : _b.value) || 0,
        loanIssueDate: new Date(liab.issueDate || new Date()) || new Date(),
        loanTerm: ((_c = liab.loanTerm) === null || _c === void 0 ? void 0 : _c.length) || 0,
        paymentAmount: ((_e = (_d = liab.paymentSchedule) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.value) || 0,
        paymentFrequency: ((_g = (_f = liab.paymentSchedule) === null || _f === void 0 ? void 0 : _f.occurrence) === null || _g === void 0 ? void 0 : _g.unit) == timeDifference_1.ETimeDifferenceUnit.YEAR
            ? 1
            : ((_j = (_h = liab.paymentSchedule) === null || _h === void 0 ? void 0 : _h.occurrence) === null || _j === void 0 ? void 0 : _j.unit) == timeDifference_1.ETimeDifferenceUnit.HALF_YEAR
                ? 2
                : ((_l = (_k = liab.paymentSchedule) === null || _k === void 0 ? void 0 : _k.occurrence) === null || _l === void 0 ? void 0 : _l.unit) == timeDifference_1.ETimeDifferenceUnit.MONTH
                    ? 12
                    : ((_o = (_m = liab.paymentSchedule) === null || _m === void 0 ? void 0 : _m.occurrence) === null || _o === void 0 ? void 0 : _o.unit) == timeDifference_1.ETimeDifferenceUnit.WEEK
                        ? 52
                        : ((_q = (_p = liab.paymentSchedule) === null || _p === void 0 ? void 0 : _p.occurrence) === null || _q === void 0 ? void 0 : _q.unit) == timeDifference_1.ETimeDifferenceUnit.DAY
                            ? 360
                            : 1,
        yearlyInterestRate: liab.interestRate || 0,
        quantity: (_r = liab.quantity) !== null && _r !== void 0 ? _r : 0.0
    });
};
exports.calculateLiabilityRemainingDebtAndInterest = calculateLiabilityRemainingDebtAndInterest;
const calculateLiabilityExpirationDate = (liab) => {
    var _a, _b;
    const start = liab.issueDate;
    if (!start)
        return null;
    const term = liab.loanTerm;
    const schedule = liab.paymentSchedule;
    const length = (term === null || term === void 0 ? void 0 : term.length) || ((_a = schedule === null || schedule === void 0 ? void 0 : schedule.occurrence) === null || _a === void 0 ? void 0 : _a.length);
    if (typeof length !== 'number')
        return null;
    const unit = (term === null || term === void 0 ? void 0 : term.unit) || ((_b = schedule === null || schedule === void 0 ? void 0 : schedule.occurrence) === null || _b === void 0 ? void 0 : _b.unit);
    if (!unit)
        return null;
    let end = new Date(start);
    switch (unit) {
        case timeDifference_1.ETimeDifferenceUnit.HALF_YEAR:
            {
                end = fns.addYears(end, length * 0.5);
            }
            ;
            break;
        case timeDifference_1.ETimeDifferenceUnit.MONTH:
            {
                end = fns.addMonths(end, length);
            }
            ;
            break;
        case timeDifference_1.ETimeDifferenceUnit.WEEK:
            {
                end = fns.addWeeks(end, length);
            }
            ;
            break;
        case timeDifference_1.ETimeDifferenceUnit.DAY:
            {
                end = fns.addDays(end, length);
            }
            ;
            break;
        default:
        case timeDifference_1.ETimeDifferenceUnit.YEAR:
            {
                end = fns.addYears(end, length);
            }
            ;
            break;
    }
    return end;
};
exports.calculateLiabilityExpirationDate = calculateLiabilityExpirationDate;
