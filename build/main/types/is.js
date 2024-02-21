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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTU8sTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFNLEVBQWUsRUFBRTtJQUMvQyxJQUFJLENBQUMsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3JCLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFBO0FBTlksUUFBQSxTQUFTLGFBTXJCO0FBRU0sTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFNLEVBQW1CLEVBQUU7SUFDckQsSUFBSSxDQUFDLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNyQixPQUFPLElBQUEsaUJBQVMsRUFBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUM7QUFDaEMsQ0FBQyxDQUFBO0FBSFksUUFBQSxXQUFXLGVBR3ZCO0FBRU0sTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFNLEVBQW9CLEVBQUU7SUFDekQsSUFBSSxDQUFDLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNyQixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBQSxpQkFBUyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQTtBQUpZLFFBQUEsY0FBYyxrQkFJMUI7QUFFTSxNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBTSxFQUF3QixFQUFFO0lBQy9ELElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDckIsT0FBTyxJQUFBLHNCQUFjLEVBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQ3JDLENBQUMsQ0FBQTtBQUhZLFFBQUEsZ0JBQWdCLG9CQUc1QjtBQUVNLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUFNLEVBQThCLEVBQUU7SUFDM0UsSUFBSSxDQUFDLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3hCLENBQUMsQ0FBQTtBQUhZLFFBQUEsc0JBQXNCLDBCQUdsQyJ9