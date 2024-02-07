import { FrameMetadataResponse, FrameMetadataType } from './types';
/**
 * This function generates the metadata for a Farcaster Frame.
 * @param buttons: The buttons to use for the frame.
 * @param image: The image to use for the frame.
 * @param input: The text input to use for the frame.
 * @param post_url: The URL to post the frame to.
 * @param refresh_period: The refresh period for the image used.
 * @returns The metadata for the frame.
 */
export declare const getFrameMetadata: ({ buttons, image, input, post_url, refresh_period, }: FrameMetadataType) => FrameMetadataResponse;
