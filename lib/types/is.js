export const isIRAsset = (x) => {
    if (!x)
        return false;
    if (typeof x.__type === 'string') {
        return x.__type === 'IR';
    }
    return false;
};
export const isCoreAsset = (x) => {
    if (!x)
        return false;
    return isIRAsset(x) === false;
};
export const isIRInvestment = (x) => {
    if (!x)
        return false;
    if (x.asset && isIRAsset(x.asset))
        return true;
    return false;
};
export const isCoreInvestment = (x) => {
    if (!x)
        return false;
    return isIRInvestment(x) === false;
};
export const isCoreGetAssetResponse = (x) => {
    if (!x)
        return false;
    return !!x.investment;
};
//# sourceMappingURL=is.js.map