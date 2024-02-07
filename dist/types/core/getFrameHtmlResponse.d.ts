import { FrameMetadataType } from './types';
/**
 * Returns an HTML string containing metadata for a new valid frame.
 *
 * @param buttons: The buttons to use for the frame.
 * @param image: The image to use for the frame.
 * @param input: The text input to use for the frame.
 * @param post_url: The URL to post the frame to.
 * @param refresh_period: The refresh period for the image used.
 * @returns An HTML string containing metadata for the frame.
 */
declare function getFrameHtmlResponse({ buttons, image, input, post_url, refresh_period, }: FrameMetadataType): string;
export { getFrameHtmlResponse };
