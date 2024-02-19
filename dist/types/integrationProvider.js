"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationProviderSchema = void 0;
const ss = require("superstruct");
exports.IntegrationProviderSchema = ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.string(),
    iconUrl: ss.string()
});
//# sourceMappingURL=integrationProvider.js.map