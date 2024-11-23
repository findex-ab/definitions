"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_REAL_ESTATE_SUBTYPES = void 0;
const asset_1 = require("../../asset");
exports.AVAILABLE_REAL_ESTATE_SUBTYPES = [
    { value: asset_1.EAssetSubtype.APARTMENT, label: 'Apartment' },
    { value: asset_1.EAssetSubtype.BUILDING, label: 'Building' },
    { value: asset_1.EAssetSubtype.HOUSE, label: 'House' },
    { value: asset_1.EAssetSubtype.PARKING, label: 'Parking' },
    { value: asset_1.EAssetSubtype.LAND, label: 'Land' },
    { value: asset_1.EAssetSubtype.COMMERCIAL, label: 'Commercial' },
    { value: asset_1.EAssetSubtype.OTHER, label: 'Other' },
];
