import type { FrameMetadataType } from '../core/types';
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
export declare function FrameMetadata({ buttons, image, input, post_url, refresh_period, wrapperComponent: WrapperComponent, }: FrameMetadataType): import("react/jsx-runtime").JSX.Element;
