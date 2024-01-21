"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCoreInvestment = exports.isIRInvestment = exports.isCoreAsset = exports.isIRAsset = void 0;
const isIRAsset = (x) => {
    if (!x)
        return false;
    if (typeof x.__type === 'object') {
        return x.__type === 'IR';
    }
    return false;
};
exports.isIRAsset = isIRAsset;
const isCoreAsset = (x) => {
    if (!x)
        return false;
    return (0, exports.isIRAsset)(x) === false;
};
exports.isCoreAsset = isCoreAsset;
const isIRInvestment = (x) => {
    if (!x)
        return false;
    if (x.asset && (0, exports.isIRAsset)(x.asset))
        return true;
    return false;
};
exports.isIRInvestment = isIRInvestment;
const isCoreInvestment = (x) => {
    if (!x)
        return false;
    return (0, exports.isIRInvestment)(x) === false;
};
exports.isCoreInvestment = isCoreInvestment;
//# sourceMappingURL=is.js.map