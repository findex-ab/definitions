"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFindexWebSocketEvent = exports.EFindexWebSocketEventType = void 0;
var EFindexWebSocketEventType;
(function (EFindexWebSocketEventType) {
    EFindexWebSocketEventType["REQUEST_AUTHORIZE"] = "REQUEST_AUTHORIZE";
    EFindexWebSocketEventType["RESPONSE_AUTHORIZE"] = "RESPONSE_AUTHORIZE";
    EFindexWebSocketEventType["REQUEST_JOIN_APP"] = "REQUEST_JOIN_APP";
    EFindexWebSocketEventType["RESPONSE_JOIN_APP"] = "RESPONSE_JOIN_APP";
    EFindexWebSocketEventType["RESPONSE_NOTIFICATION"] = "RESPONSE_NOTIFICATION";
    EFindexWebSocketEventType["VFS_FILE_UPLOAD_BEGIN"] = "VFS_FILE_UPLOAD_BEGIN";
    EFindexWebSocketEventType["VFS_FILE_UPLOAD_BEGIN_ACK"] = "VFS_FILE_UPLOAD_BEGIN_ACK";
    EFindexWebSocketEventType["VFS_FILE_UPLOAD_END"] = "VFS_FILE_UPLOAD_END";
    EFindexWebSocketEventType["VFS_FILE_UPLOAD_END_ACK"] = "VFS_FILE_UPLOAD_END_ACK";
    EFindexWebSocketEventType["VFS_FILE_UPLOAD_CHUNK"] = "VFS_FILE_UPLOAD_CHUNK";
    EFindexWebSocketEventType["VFS_FILE_UPLOAD_CHUNK_ACK"] = "VFS_FILE_UPLOAD_CHUNK_ACK";
    EFindexWebSocketEventType["VFS_MKDIR"] = "VFS_MKDIR";
    EFindexWebSocketEventType["VFS_MKDIR_ACK"] = "VFS_MKDIR_ACK";
    EFindexWebSocketEventType["VFS_SET_PWD"] = "VFS_SET_PWD";
    EFindexWebSocketEventType["VFS_CD_BACK"] = "VFS_CD_BACK";
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
