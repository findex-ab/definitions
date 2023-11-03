"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSchema = exports.doSomething = void 0;
const zod_1 = require("zod");
const doSomething = (value) => value.value;
exports.doSomething = doSomething;
exports.ValueSchema = zod_1.default.object({
    value: zod_1.default.number(),
    type: zod_1.default.string().optional(),
    percentage: zod_1.default.number().optional(),
});
