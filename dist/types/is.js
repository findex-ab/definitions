"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIRInvestment = exports.isCoreInvestment = exports.isIRAsset = exports.isCoreAsset = void 0;
const isCoreAsset = (x) => {
    if (!x)
        return false;
    return ((typeof x.id !== 'undefined' && typeof x.currency !== 'undefined') || typeof x.specifics !== 'undefined');
};
exports.isCoreAsset = isCoreAsset;
const isIRAsset = (x) => {
    if (!x)
        return false;
    return (0, exports.isCoreAsset)(x) === false;
};
exports.isIRAsset = isIRAsset;
const isCoreInvestment = (x) => {
    if (!x)
        return false;
    return ((typeof x.transactions !== 'undefined' && (Array.isArray(x.transactions))) ||
        (typeof x.currency !== 'undefined'));
};
exports.isCoreInvestment = isCoreInvestment;
const isIRInvestment = (x) => {
    if (!x)
        return false;
    return (0, exports.isCoreInvestment)(x) === false;
};
exports.isIRInvestment = isIRInvestment;
//# sourceMappingURL=is.js.map