"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicClient = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
exports.publicClient = (0, viem_1.createPublicClient)({
    chain: chains_1.mainnet,
    transport: (0, viem_1.http)(),
});
//# sourceMappingURL=client.js.map