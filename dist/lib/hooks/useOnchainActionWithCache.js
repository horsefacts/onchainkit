"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnchainActionWithCache = void 0;
const react_1 = require("react");
const inMemoryStorageService_1 = require("../store/inMemoryStorageService");
/**
 * A generic hook to fetch and store data using a specified storage service.
 * It fetches data based on the given dependencies and stores it using the provided storage service.
 * @param action - The action function to fetch data.
 * @param actionKey - A key associated with the action for caching purposes.
 * @returns The data fetched by the action function and a boolean indicating whether the data is being fetched.
 */
function useOnchainActionWithCache(action, actionKey) {
    const [data, setData] = (0, react_1.useState)(undefined);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        let isSubscribed = true;
        const callAction = async () => {
            let fetchedData;
            // Use cache only if actionKey is not empty
            if (actionKey) {
                fetchedData = await inMemoryStorageService_1.InMemoryStorage.getData(actionKey);
            }
            // If no cached data or actionKey is empty, fetch new data
            if (!fetchedData) {
                fetchedData = (await action());
                // Cache the data only if actionKey is not empty
                if (actionKey) {
                    await inMemoryStorageService_1.InMemoryStorage.setData(actionKey, fetchedData);
                }
            }
            if (isSubscribed) {
                setData(fetchedData);
                setIsLoading(false);
            }
        };
        void callAction();
        return () => {
            isSubscribed = false;
        };
    }, [actionKey, action]);
    return { data, isLoading };
}
exports.useOnchainActionWithCache = useOnchainActionWithCache;
//# sourceMappingURL=useOnchainActionWithCache.js.map