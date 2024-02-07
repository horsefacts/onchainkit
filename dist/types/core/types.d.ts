/// <reference types="react" />
import { NeynarFrameValidationInternalModel } from '../utils/neynar/frame/types';
/**
 * Frame Data
 *
 * Note: exported as public Type
 */
export interface FrameData {
    buttonIndex: number;
    castId: {
        fid: number;
        hash: string;
    };
    inputText: string;
    fid: number;
    messageHash: string;
    network: number;
    timestamp: number;
    url: string;
}
/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export interface FrameRequest {
    untrustedData: FrameData;
    trustedData: {
        messageBytes: string;
    };
}
/**
 * Simplified Object model with the raw Neynar data if-needed.
 */
export interface FrameValidationData {
    button: number;
    following: boolean;
    input: string;
    interactor: {
        fid: number;
        custody_address: string;
        verified_accounts: string[];
    };
    liked: boolean;
    raw: NeynarFrameValidationInternalModel;
    recasted: boolean;
    valid: boolean;
}
export type FrameValidationResponse = {
    isValid: true;
    message: FrameValidationData;
} | {
    isValid: false;
    message: undefined;
};
export declare function convertToFrame(json: any): {
    fid: any;
    url: any;
    messageHash: any;
    timestamp: any;
    network: any;
    buttonIndex: any;
    castId: {
        fid: any;
        hash: any;
    };
};
export type FrameButtonMetadata = {
    label: string;
    action?: 'post' | 'post_redirect' | 'link' | 'mint';
    target?: string;
};
export type FrameInputMetadata = {
    text: string;
};
/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export type FrameMetadataType = {
    buttons?: [FrameButtonMetadata, ...FrameButtonMetadata[]];
    image: string;
    input?: FrameInputMetadata;
    post_url?: string;
    refresh_period?: number;
    wrapperComponent?: React.ComponentType<any>;
};
/**
 * Frame Metadata Response
 *
 * Note: exported as public Type
 */
export type FrameMetadataResponse = Record<string, string>;
