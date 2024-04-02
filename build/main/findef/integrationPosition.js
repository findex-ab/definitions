"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionId = void 0;
const getPositionId = (pos) => {
    var _a, _b, _c;
    return ((_a = pos.instrument) === null || _a === void 0 ? void 0 : _a.internalId) || ((_b = pos.instrument) === null || _b === void 0 ? void 0 : _b.isin) || ((((_c = pos.instrument) === null || _c === void 0 ? void 0 : _c.name) || '').toLowerCase());
};
exports.getPositionId = getPositionId;
