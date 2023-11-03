"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentIdSchema = void 0;
const zod_1 = require("zod");
exports.DocumentIdSchema = zod_1.default.string().or(zod_1.default.object({ _id: zod_1.default.string() }));
