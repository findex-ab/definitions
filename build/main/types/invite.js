"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteSchema = exports.EInviteType = exports.EInviteStatus = void 0;
const docref_1 = require("./docref");
const user_1 = require("./user");
const ss = __importStar(require("superstruct"));
var EInviteStatus;
(function (EInviteStatus) {
    EInviteStatus["PENDING"] = "PENDING";
    EInviteStatus["RESOLVED"] = "RESOLVED";
})(EInviteStatus || (exports.EInviteStatus = EInviteStatus = {}));
;
var EInviteType;
(function (EInviteType) {
    EInviteType["ASSET_ADMIN"] = "ASSET_ADMIN";
    EInviteType["SHAREHOLDER"] = "SHAREHOLDER";
})(EInviteType || (exports.EInviteType = EInviteType = {}));
exports.InviteSchema = ss.type({
    user: ss.assign(ss.omit(user_1.UserSchema, ['email']), ss.type({ email: ss.string() })),
    asset: (0, docref_1.DocRefSchema)(),
    status: ss.enums([EInviteStatus.PENDING, EInviteStatus.RESOLVED]),
    type: ss.enums([EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER])
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUFpRDtBQUNqRCxpQ0FBMkM7QUFFM0MsZ0RBQWtDO0FBSWxDLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixvQ0FBbUIsQ0FBQTtJQUNuQixzQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSFcsYUFBYSw2QkFBYixhQUFhLFFBR3hCO0FBQUEsQ0FBQztBQUVGLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQiwwQ0FBMkIsQ0FBQTtJQUMzQiwwQ0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBSFcsV0FBVywyQkFBWCxXQUFXLFFBR3RCO0FBVVksUUFBQSxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRixLQUFLLEVBQUUsSUFBQSxxQkFBWSxHQUFVO0lBQzdCLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFFLENBQUM7SUFDbkUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBRSxXQUFXLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUUsQ0FBQztDQUNyRSxDQUFDLENBQUMifQ==