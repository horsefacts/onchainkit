import React from 'react';
import type { Address } from 'viem';
type NameProps = {
    address: Address;
    className?: string;
    sliced?: boolean;
    props?: React.HTMLAttributes<HTMLSpanElement>;
};
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
export declare function Name({ address, className, sliced, props }: NameProps): import("react/jsx-runtime").JSX.Element | null;
export {};
