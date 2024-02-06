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
export const getFrameMetadata = function ({
  buttons,
  image,
  input,
  post_url,
  refresh_period,
}: FrameMetadataType): FrameMetadataResponse {
  const metadata: Record<string, string> = {
    'fc:frame': 'vNext',
  };
  metadata['fc:frame:image'] = image;
  if (input) {
    metadata['fc:frame:input:text'] = input.text;
  }
  if (buttons) {
    buttons.forEach((button, index) => {
      metadata[`fc:frame:button:${index + 1}`] = button.label;
      if (button.action) {
        metadata[`fc:frame:button:${index + 1}:action`] = button.action;
      }
      if (button.target) {
        metadata[`fc:frame:button:${index + 1}:target`] = button.target;
      }
    });
  }
  if (post_url) {
    metadata['fc:frame:post_url'] = post_url;
  }
  if (refresh_period) {
    metadata['fc:frame:refresh_period'] = refresh_period.toString();
  }
  return metadata;
};
