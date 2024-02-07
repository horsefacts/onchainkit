import { NEYNAR_DEFAULT_API_KEY, neynarFrameValidation, } from '../utils/neynar/frame/neynarFrameFunctions';
/**
 * Given a frame message, decode and validate it.
 *
 * If message is valid, return the message. Otherwise undefined.
 *
 * @param body The JSON received by server on frame callback
 */
async function getFrameMessage(body, messageOptions) {
    // Validate the message
    const response = await neynarFrameValidation(body?.trustedData?.messageBytes, messageOptions?.neynarApiKey || NEYNAR_DEFAULT_API_KEY, messageOptions?.castReactionContext || true, messageOptions?.followContext || true);
    if (response?.valid) {
        return {
            isValid: true,
            message: response,
        };
    }
    else {
        // Security best practice, don't return anything if we can't validate the frame.
        return {
            isValid: false,
            message: undefined,
        };
    }
}
export { getFrameMessage };
//# sourceMappingURL=getFrameMessage.js.map