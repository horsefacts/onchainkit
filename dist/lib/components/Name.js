"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const address_1 = require("../core/address");
const useName_1 = require("../hooks/useName");
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
function Name({ address, className, sliced = true, props }) {
    const { ensName, isLoading } = (0, useName_1.useName)(address);
    // wrapped in useMemo to prevent unnecessary recalculations.
    const normalizedAddress = (0, react_1.useMemo)(() => {
        if (!ensName && !isLoading && sliced) {
            return (0, address_1.getSlicedAddress)(address);
        }
        return address;
    }, [address, isLoading]);
    if (isLoading) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("span", { className: className, ...props, children: ensName ?? normalizedAddress }));
}
exports.Name = Name;
//# sourceMappingURL=Name.js.map