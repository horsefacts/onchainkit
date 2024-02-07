"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameMetadata = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
/**
 * FrameMetadata component
 *
 * @description
 * This component is used to add React Frame Metadata to the page.
 *
 * @example
 * ```tsx
 * <FrameMetadata
 *   buttons={[
 *     {
 *       label: 'Tell me the story',
 *     },
 *     {
 *       label: 'Redirect to cute dog pictures',
 *       action: 'post_redirect',
 *     },
 *   ]}
 *   image="https://zizzamia.xyz/park-1.png"
 *   input={{
 *     text: 'Tell me a boat story',
 *   }}
 *   post_url="https://zizzamia.xyz/api/frame"
 * />
 * ```
 *
 * @param {FrameMetadataType} props - The metadata for the frame.
 * @param {string} props.image - The image URL.
 * @param {string} props.input - The input text.
 * @param {string} props.post_url - The post URL.
 * @param {number} props.refresh_period - The refresh period.
 * @param {Array<{ label: string, action?: string }>} props.buttons - The buttons.
 * @param {React.ComponentType<any> | undefined} props.wrapperComponent - The wrapper component meta tags are rendered in.
 * @returns {React.ReactElement} The FrameMetadata component.
 */
function FrameMetadata({ buttons, image, input, post_url, refresh_period, wrapperComponent: WrapperComponent = react_1.Fragment, }) {
    return ((0, jsx_runtime_1.jsxs)(WrapperComponent, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "fc:frame", content: "vNext" }), !!image && (0, jsx_runtime_1.jsx)("meta", { name: "fc:frame:image", content: image }), !!input && (0, jsx_runtime_1.jsx)("meta", { name: "fc:frame:input:text", content: input.text }), buttons?.map((button, index) => {
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("meta", { name: `fc:frame:button:${index + 1}`, content: button.label }), !!button.action && ((0, jsx_runtime_1.jsx)("meta", { name: `fc:frame:button:${index + 1}:action`, content: button.action }))] }));
            }), !!post_url && (0, jsx_runtime_1.jsx)("meta", { name: "fc:frame:post_url", content: post_url }), !!refresh_period && ((0, jsx_runtime_1.jsx)("meta", { name: "fc:frame:refresh_period", content: refresh_period.toString() }))] }));
}
exports.FrameMetadata = FrameMetadata;
//# sourceMappingURL=FrameMetadata.js.map