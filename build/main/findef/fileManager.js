"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EFileManagerListMode = exports.DEFAULT_USER_DIRECTORY_TREE = exports.USER_ROOT_DIRECTORY_TEMPLATE = void 0;
const attachment_1 = require("./attachment");
const directory = (props) => {
    return Object.assign(Object.assign({}, props), { name: props.name || '', type: attachment_1.EAttachmentType.DIRECTORY, fileType: attachment_1.EAttachmentFileType.DIRECTORY });
};
const systemDirectory = (props) => {
    return Object.assign(Object.assign({}, directory(props)), { canBeDeleted: false });
};
exports.USER_ROOT_DIRECTORY_TEMPLATE = systemDirectory({
    name: '/',
    systemType: attachment_1.EAttachmentSystemType.USER_ROOT_DIRECTORY,
    children: [
        systemDirectory({
            name: 'Portfolio',
            systemType: attachment_1.EAttachmentSystemType.USER_PORTFOLIO_DIRECTORY,
            sortPriority: -1,
            children: [
                systemDirectory({
                    name: 'Assets',
                    systemType: attachment_1.EAttachmentSystemType.USER_PORTFOLIO_ASSETS_DIRECTORY,
                    sortPriority: -1,
                    forEachChild: systemDirectory({
                        systemType: attachment_1.EAttachmentSystemType.ASSET_DIRECTORY,
                        children: [
                            systemDirectory({
                                name: 'My Documents',
                                systemType: attachment_1.EAttachmentSystemType.USER_INVESTMENT_DIRECTORY
                            }),
                            systemDirectory({
                                name: 'Shared with Me',
                                systemType: attachment_1.EAttachmentSystemType.USER_SHARED_DIRECTORY
                            }),
                        ],
                    }),
                }),
                systemDirectory({
                    name: 'Liabilities',
                    systemType: attachment_1.EAttachmentSystemType.USER_PORTFOLIO_LIABILITIES_DIRECTORY,
                    sortPriority: 1,
                    forEachChild: systemDirectory({
                        systemType: attachment_1.EAttachmentSystemType.LIABILITY_DIRECTORY,
                        children: [
                            systemDirectory({
                                name: 'My Documents',
                                systemType: attachment_1.EAttachmentSystemType.USER_LIABILITY_DIRECTORY
                            }),
                            systemDirectory({
                                name: 'Shared with Me',
                                systemType: attachment_1.EAttachmentSystemType.USER_SHARED_DIRECTORY
                            }),
                        ],
                    })
                }),
            ],
        }),
        systemDirectory({
            name: 'Shared With Me',
            systemType: attachment_1.EAttachmentSystemType.USER_SHARED_DIRECTORY,
            sortPriority: Number.MAX_SAFE_INTEGER,
        }),
        systemDirectory({
            name: 'Uploads',
            systemType: attachment_1.EAttachmentSystemType.USER_UPLOADS_DIRECTORY,
            sortPriority: 1,
        }),
    ],
});
exports.DEFAULT_USER_DIRECTORY_TREE = [
    ...(exports.USER_ROOT_DIRECTORY_TEMPLATE.children || [])
];
var EFileManagerListMode;
(function (EFileManagerListMode) {
    EFileManagerListMode["ONLY_MINE"] = "ONLY_MINE";
    EFileManagerListMode["ALL"] = "ALL";
})(EFileManagerListMode || (exports.EFileManagerListMode = EFileManagerListMode = {}));
