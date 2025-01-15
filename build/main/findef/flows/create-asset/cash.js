"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_CASH_SUBTYPES = void 0;
const asset_1 = require("../../asset");
exports.AVAILABLE_CASH_SUBTYPES = [
    { value: asset_1.EAssetSubtype.CHECKING_ACCOUNT, label: 'Checking Account' },
    { value: asset_1.EAssetSubtype.SAVINGS_ACCOUNT, label: 'Savings Account' },
    { value: asset_1.EAssetSubtype.INVESTMENT_ACCOUNT, label: 'Investment Account' },
    { value: asset_1.EAssetSubtype.NO_ACCOUNT, label: 'No Account' }
];
