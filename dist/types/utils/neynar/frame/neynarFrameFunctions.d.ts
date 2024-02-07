import { FrameValidationData } from '../../../core/types';
export declare const NEYNAR_DEFAULT_API_KEY = "NEYNAR_ONCHAIN_KIT";
export declare function neynarFrameValidation(messageBytes: string, apiKey?: string, castReactionContext?: boolean, followContext?: boolean): Promise<FrameValidationData | undefined>;
