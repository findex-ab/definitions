export var EFindexWebSocketEventType;
(function (EFindexWebSocketEventType) {
    EFindexWebSocketEventType["REQUEST_AUTHORIZE"] = "REQUEST_AUTHORIZE";
    EFindexWebSocketEventType["RESPONSE_AUTHORIZE"] = "RESPONSE_AUTHORIZE";
    EFindexWebSocketEventType["REQUEST_JOIN_APP"] = "REQUEST_JOIN_APP";
    EFindexWebSocketEventType["RESPONSE_JOIN_APP"] = "RESPONSE_JOIN_APP";
    EFindexWebSocketEventType["RESPONSE_NOTIFICATION"] = "RESPONSE_NOTIFICATION";
})(EFindexWebSocketEventType || (EFindexWebSocketEventType = {}));
export const isFindexWebSocketEvent = (x) => {
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
