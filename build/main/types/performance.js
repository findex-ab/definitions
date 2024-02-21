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
exports.PerformanceSchema = void 0;
const ss = __importStar(require("superstruct"));
exports.PerformanceSchema = ss.type({
    date: ss.string(),
    accMonetaryPerf: ss.number(),
    monetaryPerf: ss.number(),
    accPctPerf: ss.number(),
    pctPerf: ss.number(),
    raw: ss.string()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvcGVyZm9ybWFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBa0M7QUFLckIsUUFBQSxpQkFBaUIsR0FBNkIsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNqQixlQUFlLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUM1QixZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUN6QixVQUFVLEVBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUN0QixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNwQixHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtDQUNqQixDQUFDLENBQUMifQ==