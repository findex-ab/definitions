"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCoreGetAssetResponse = exports.isCoreInvestment = exports.isIRInvestment = exports.isCoreAsset = exports.isIRAsset = void 0;
const isIRAsset = (x) => {
    if (!x)
        return false;
    if (typeof x.__type === 'string') {
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
const isCoreGetAssetResponse = (x) => {
    if (!x)
        return false;
    return !!x.investment;
};
exports.isCoreGetAssetResponse = isCoreGetAssetResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmluZGVmL2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1PLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBTSxFQUFlLEVBQUU7SUFDL0MsSUFBSSxDQUFDLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNyQixJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQTtBQU5ZLFFBQUEsU0FBUyxhQU1yQjtBQUVNLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBTSxFQUFtQixFQUFFO0lBQ3JELElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDckIsT0FBTyxJQUFBLGlCQUFTLEVBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQUhZLFFBQUEsV0FBVyxlQUd2QjtBQUVNLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBTSxFQUFvQixFQUFFO0lBQ3pELElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDckIsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUEsaUJBQVMsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0MsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUE7QUFKWSxRQUFBLGNBQWMsa0JBSTFCO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQU0sRUFBd0IsRUFBRTtJQUMvRCxJQUFJLENBQUMsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3JCLE9BQU8sSUFBQSxzQkFBYyxFQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQztBQUNyQyxDQUFDLENBQUE7QUFIWSxRQUFBLGdCQUFnQixvQkFHNUI7QUFFTSxNQUFNLHNCQUFzQixHQUFHLENBQUMsQ0FBTSxFQUE4QixFQUFFO0lBQzNFLElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDckIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUN4QixDQUFDLENBQUE7QUFIWSxRQUFBLHNCQUFzQiwwQkFHbEMifQ==