"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionId = void 0;
const getPositionId = (pos) => {
    var _a, _b, _c, _d, _e;
    const name = ((_a = pos.instrument) === null || _a === void 0 ? void 0 : _a.name) ? pos.instrument.name.toLowerCase() : undefined;
    const ids = [(_b = pos.instrument) === null || _b === void 0 ? void 0 : _b.internalId, (_c = pos.instrument) === null || _c === void 0 ? void 0 : _c.isin, name, (_d = pos.instrument) === null || _d === void 0 ? void 0 : _d.mic, (_e = pos.instrument) === null || _e === void 0 ? void 0 : _e.symbol].filter(it => !!it);
    return ids.map(id => id.trim().replace(' ', '')).join('_');
};
exports.getPositionId = getPositionId;
