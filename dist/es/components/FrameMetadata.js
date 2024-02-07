import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
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
export function FrameMetadata({ buttons, image, input, post_url, refresh_period, wrapperComponent: WrapperComponent = Fragment, }) {
    return (_jsxs(WrapperComponent, { children: [_jsx("meta", { name: "fc:frame", content: "vNext" }), !!image && _jsx("meta", { name: "fc:frame:image", content: image }), !!input && _jsx("meta", { name: "fc:frame:input:text", content: input.text }), buttons?.map((button, index) => {
                return (_jsxs(_Fragment, { children: [_jsx("meta", { name: `fc:frame:button:${index + 1}`, content: button.label }), !!button.action && (_jsx("meta", { name: `fc:frame:button:${index + 1}:action`, content: button.action }))] }));
            }), !!post_url && _jsx("meta", { name: "fc:frame:post_url", content: post_url }), !!refresh_period && (_jsx("meta", { name: "fc:frame:refresh_period", content: refresh_period.toString() }))] }));
}
//# sourceMappingURL=FrameMetadata.js.map