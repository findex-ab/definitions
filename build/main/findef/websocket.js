"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFindexWebSocketEvent = exports.EFindexWebSocketEventType = void 0;
var EFindexWebSocketEventType;
(function (EFindexWebSocketEventType) {
    EFindexWebSocketEventType["REQUEST_AUTHORIZE"] = "REQUEST_AUTHORIZE";
    EFindexWebSocketEventType["RESPONSE_AUTHORIZE"] = "RESPONSE_AUTHORIZE";
    EFindexWebSocketEventType["RESPONSE_NOTIFICATION"] = "RESPONSE_NOTIFICATION";
})(EFindexWebSocketEventType || (exports.EFindexWebSocketEventType = EFindexWebSocketEventType = {}));
const isFindexWebSocketEvent = (x) => {
    if (!x)
        return false;
    if (typeof x !== 'object')
        return false;
    if (!x.type)
        return false;
    if (!x.payload)
        return false;
    return true;
};
exports.isFindexWebSocketEvent = isFindexWebSocketEvent;
