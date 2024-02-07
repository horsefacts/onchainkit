import { FrameRequest, FrameValidationResponse } from './types';
type FrameMessageOptions = {
    neynarApiKey?: string;
    castReactionContext?: boolean;
    followContext?: boolean;
} | undefined;
/**
 * Given a frame message, decode and validate it.
 *
 * If message is valid, return the message. Otherwise undefined.
 *
 * @param body The JSON received by server on frame callback
 */
declare function getFrameMessage(body: FrameRequest, messageOptions?: FrameMessageOptions): Promise<FrameValidationResponse>;
export { getFrameMessage };
