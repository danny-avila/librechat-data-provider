import type { TSubmission, EModelEndpoint } from './types';
export default function createPayload(submission: TSubmission): {
    server: string;
    payload: {
        conversationId: string;
        endpoint: EModelEndpoint;
        model?: string | undefined;
        promptPrefix?: string | undefined;
        temperature?: number | undefined;
        messageId: string;
        clientId: string;
        parentMessageId: string;
        sender: string;
        text: string;
        isCreatedByUser: boolean;
        error: boolean;
        createdAt: string;
        updatedAt: string;
    };
};
