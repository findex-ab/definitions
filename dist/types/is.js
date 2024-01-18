"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIRAsset = exports.isCoreAsset = void 0;
const isCoreAsset = (x) => {
    if (!x)
        return false;
    return (typeof x.id !== 'undefined' || typeof x.specifics !== 'undefined');
};
exports.isCoreAsset = isCoreAsset;
const isIRAsset = (x) => {
    if (!x)
        return false;
    return (0, exports.isCoreAsset)(x) === false;
};
exports.isIRAsset = isIRAsset;
//# sourceMappingURL=is.js.map