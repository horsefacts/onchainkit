import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { getSlicedAddress } from '../core/address';
import { useName } from '../hooks/useName';
/**
 * Name is a React component that renders the user name from an Ethereum address.
 * It displays the ENS name if available; otherwise, it shows either a sliced version of the address
 * or the full address, based on the 'sliced' prop. By default, 'sliced' is set to true.
 *
 * @param {Address} address - Ethereum address to be displayed.
 * @param {string} [className] - Optional CSS class for custom styling.
 * @param {boolean} [sliced=true] - Determines if the address should be sliced when no ENS name is available.
 * @param {React.HTMLAttributes<HTMLSpanElement>} [props] - Additional HTML attributes for the span element.
 */
export function Name({ address, className, sliced = true, props }) {
    const { ensName, isLoading } = useName(address);
    // wrapped in useMemo to prevent unnecessary recalculations.
    const normalizedAddress = useMemo(() => {
        if (!ensName && !isLoading && sliced) {
            return getSlicedAddress(address);
        }
        return address;
    }, [address, isLoading]);
    if (isLoading) {
        return null;
    }
    return (_jsx("span", { className: className, ...props, children: ensName ?? normalizedAddress }));
}
//# sourceMappingURL=Name.js.map