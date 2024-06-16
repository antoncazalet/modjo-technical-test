import type { UpdatedBy } from '../../utils/updated-by.type';

export type Transcript = {
    id: string;
    call_id: string;
    timestamp: Date;
    content: string;
    language: string;
    participant_id: string;
    topic_id: string;
    created_at: Date;
    updated_at: Date;
    updated_by: UpdatedBy;
};

export type CreateTranscriptInput = {
    call_id: string;
    timestamp: Date;
    content: string;
    language: string;
    participant_id: string;
    topic_id: string;
};
