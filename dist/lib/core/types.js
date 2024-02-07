"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToFrame = void 0;
function convertToFrame(json) {
    return {
        fid: json.fid,
        url: json.frameActionBody?.url.toString(),
        messageHash: json.messageHash,
        timestamp: json.timestamp,
        network: json.network,
        buttonIndex: json.frameActionBody?.buttonIndex,
        castId: {
            fid: json.frameActionBody?.castId?.fid,
            hash: json.frameActionBody?.castId?.hash,
        },
    };
}
exports.convertToFrame = convertToFrame;
//# sourceMappingURL=types.js.map