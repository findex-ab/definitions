"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_LIABILITY_TYPES = exports.AVAILABLE_LIABILITY_SUBTYPES = void 0;
const liability_1 = require("../../liability");
exports.AVAILABLE_LIABILITY_SUBTYPES = [
    { value: liability_1.ELiabilitySubtype.GOLD, label: 'Gold' },
    { value: liability_1.ELiabilitySubtype.GUARANTOR, label: 'Guarantor' },
    { value: liability_1.ELiabilitySubtype.MORTAGE, label: 'Mortage' },
    { value: liability_1.ELiabilitySubtype.REAL_ESTATE, label: 'Real Estate' },
    { value: liability_1.ELiabilitySubtype.SHARES, label: 'Shares' },
    { value: liability_1.ELiabilitySubtype.STOCK_OPTIONS, label: 'Stock Options' },
];
exports.AVAILABLE_LIABILITY_TYPES = [
    { value: liability_1.ELiabilityType.CREDIT, label: 'Credit' },
    { value: liability_1.ELiabilityType.DEBT, label: 'Debt' },
];
