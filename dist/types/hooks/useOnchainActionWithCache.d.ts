import type { ActionFunction, ActionKey } from './types';
import type { StorageValue } from '../store/types';
/**
 * A generic hook to fetch and store data using a specified storage service.
 * It fetches data based on the given dependencies and stores it using the provided storage service.
 * @param action - The action function to fetch data.
 * @param actionKey - A key associated with the action for caching purposes.
 * @returns The data fetched by the action function and a boolean indicating whether the data is being fetched.
 */
export declare function useOnchainActionWithCache<T>(action: ActionFunction<T>, actionKey: ActionKey): {
    data: StorageValue;
    isLoading: boolean;
};
