import { useEffect, useState } from 'react';
import { InMemoryStorage } from '../store/inMemoryStorageService';
/**
 * A generic hook to fetch and store data using a specified storage service.
 * It fetches data based on the given dependencies and stores it using the provided storage service.
 * @param action - The action function to fetch data.
 * @param actionKey - A key associated with the action for caching purposes.
 * @returns The data fetched by the action function and a boolean indicating whether the data is being fetched.
 */
export function useOnchainActionWithCache(action, actionKey) {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let isSubscribed = true;
        const callAction = async () => {
            let fetchedData;
            // Use cache only if actionKey is not empty
            if (actionKey) {
                fetchedData = await InMemoryStorage.getData(actionKey);
            }
            // If no cached data or actionKey is empty, fetch new data
            if (!fetchedData) {
                fetchedData = (await action());
                // Cache the data only if actionKey is not empty
                if (actionKey) {
                    await InMemoryStorage.setData(actionKey, fetchedData);
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
//# sourceMappingURL=useOnchainActionWithCache.js.map