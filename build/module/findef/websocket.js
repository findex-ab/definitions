export var EFindexWebSocketEventType;
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
    EFindexWebSocketEventType["VFS_MOVE"] = "VFS_MOVE";
    EFindexWebSocketEventType["VFS_MOVE_ACK"] = "VFS_MOVE_ACK";
    EFindexWebSocketEventType["VFS_MKDIR_ACK"] = "VFS_MKDIR_ACK";
    EFindexWebSocketEventType["VFS_SET_PWD"] = "VFS_SET_PWD";
    EFindexWebSocketEventType["VFS_CD_BACK"] = "VFS_CD_BACK";
    EFindexWebSocketEventType["VFS_RM"] = "VFS_RM";
    EFindexWebSocketEventType["VFS_SET_PERMISSIONS"] = "VFS_SET_PERMISSIONS";
    EFindexWebSocketEventType["VFS_SET_PERMISSIONS_ACK"] = "VFS_SET_PERMISSIONS_ACK";
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
