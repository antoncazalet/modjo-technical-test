export type Transcript = {
    id: string;
    call_id: string;
    timestamp: Date;
    content: string;
    language: string;
    participant_id: string;
    topic_id: string;
};

export type CreateTranscriptInput = Omit<Transcript, 'id'>;
