"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlicedAddress = void 0;
/**
 * getSlicedAddress returns the first 5 and last 4 characters of an address.
 */
const getSlicedAddress = (address) => {
    if (!address) {
        return '';
    }
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
};
exports.getSlicedAddress = getSlicedAddress;
//# sourceMappingURL=address.js.map