"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_LISTED_EQUITY_SUBTYPES = void 0;
const asset_1 = require("../../asset");
exports.AVAILABLE_LISTED_EQUITY_SUBTYPES = [
    { value: asset_1.EAssetSubtype.STOCK, label: 'Stock' },
    { value: asset_1.EAssetSubtype.STOCK_OPTIONS, label: 'Stock Options', disabled: true },
    { value: asset_1.EAssetSubtype.FUND, label: 'Fund' },
    { value: asset_1.EAssetSubtype.ETF, label: 'ETF' }
];
