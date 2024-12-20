"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_LIABILITY_TYPES = exports.AVAILABLE_LIABILITY_SECURITY_OPTIONS = void 0;
const liability_1 = require("../../liability");
exports.AVAILABLE_LIABILITY_SECURITY_OPTIONS = [
    { value: liability_1.ELiabilitySecurity.GOLD, label: 'Gold' },
    { value: liability_1.ELiabilitySecurity.GUARANTOR, label: 'Guarantor' },
    { value: liability_1.ELiabilitySecurity.MORTAGE, label: 'Mortage' },
    { value: liability_1.ELiabilitySecurity.REAL_ESTATE, label: 'Real Estate' },
    { value: liability_1.ELiabilitySecurity.SHARES, label: 'Shares' },
    { value: liability_1.ELiabilitySecurity.STOCK_OPTIONS, label: 'Stock Options' },
];
exports.AVAILABLE_LIABILITY_TYPES = [
    { value: liability_1.ELiabilityType.CREDIT, label: 'Credit' },
    { value: liability_1.ELiabilityType.DEBT, label: 'Debt' },
];
