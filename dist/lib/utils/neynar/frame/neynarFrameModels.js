"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToNeynarResponseModel = void 0;
function convertToNeynarResponseModel(data) {
    if (!data) {
        return;
    }
    /**
     * Note: This is not a type-safe conversion, however, balancing that risk with an additional import
     * to include a library like AJV which can accomplish that.  Alternatively, we could write conversions
     * for each type, but that seemed overkill.
     */
    const neynarResponse = data;
    // Shorten paths
    const action = neynarResponse.action;
    const cast = action?.cast;
    const interactor = action?.interactor;
    return {
        button: action?.tapped_button?.index,
        following: action?.interactor?.viewer_context?.following,
        input: action?.input?.text,
        interactor: {
            fid: interactor?.fid,
            custody_address: interactor?.custody_address,
            verified_accounts: interactor?.verifications,
        },
        liked: cast?.viewer_context?.liked,
        raw: neynarResponse,
        recasted: cast?.viewer_context?.recasted,
        valid: neynarResponse.valid,
    };
}
exports.convertToNeynarResponseModel = convertToNeynarResponseModel;
//# sourceMappingURL=neynarFrameModels.js.map