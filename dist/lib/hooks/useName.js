"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useName = exports.ensNameAction = void 0;
const client_1 = require("../network/client");
const useOnchainActionWithCache_1 = require("./useOnchainActionWithCache");
/**
 * An asynchronous function to fetch the Ethereum Name Service (ENS) name for a given Ethereum address.
 * It returns the ENS name if it exists, or null if it doesn't or in case of an error.
 *
 * @param address - The Ethereum address for which the ENS name is being fetched.
 * @returns A promise that resolves to the ENS name (as a string) or null.
 */
const ensNameAction = (address) => async () => {
    try {
        return await client_1.publicClient.getEnsName({
            address,
        });
    }
    catch (err) {
        return null;
    }
};
exports.ensNameAction = ensNameAction;
/**
 * It leverages the `useOnchainActionWithCache` hook for fetching and optionally caching the ENS name,
 * handling loading state internally.
 * @param address - The Ethereum address for which the ENS name is to be fetched.
 * @returns An object containing:
 *  - `ensName`: The fetched ENS name for the provided address, or null if not found or in case of an error.
 *  - `isLoading`: A boolean indicating whether the ENS name is currently being fetched.
 */
const useName = (address) => {
    const ensActionKey = `ens-name-${address}`;
    const { data: ensName, isLoading } = (0, useOnchainActionWithCache_1.useOnchainActionWithCache)((0, exports.ensNameAction)(address), ensActionKey);
    return { ensName, isLoading };
};
exports.useName = useName;
//# sourceMappingURL=useName.js.map