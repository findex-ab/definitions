"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_LIABILITY_TYPES = exports.AVAILABLE_LIABILITY_SUBTYPES = void 0;
const liability_1 = require("../../liability");
exports.AVAILABLE_LIABILITY_SUBTYPES = [
    // { value: ELiabilitySubtype.GOLD, label: 'Gold' },
    // { value: ELiabilitySubtype.GUARANTOR, label: 'Guarantor' },
    { value: liability_1.ELiabilitySubtype.MORTGAGE, label: 'Mortgage' },
    { value: liability_1.ELiabilitySubtype.BOND, label: 'Bond' },
    { value: liability_1.ELiabilitySubtype.OTHER, label: 'Other' },
    //  { value: ELiabilitySubtype.REAL_ESTATE, label: 'Real Estate' },
    //{ value: ELiabilitySubtype.SHARES, label: 'Shares' },
    //{ value: ELiabilitySubtype.STOCK_OPTIONS, label: 'Stock Options' },
];
exports.AVAILABLE_LIABILITY_TYPES = [
    { value: liability_1.ELiabilityType.CREDIT, label: 'Credit' },
    { value: liability_1.ELiabilityType.DEBT, label: 'Debt' },
];
