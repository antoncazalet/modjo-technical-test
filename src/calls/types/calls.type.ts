import type { UpdatedBy } from '../../utils/updated-by.type';

export type CallStatus =
    | 'DRAFT'
    | 'SCHEDULED'
    | 'IN_PROGRESS'
    | 'COMPLETED'
    | 'CANCELLED';

export type Call = {
    id: string;
    title: string;
    description: string;
    status: CallStatus;
    creator_id: string;
    tag_ids: string[];
    topic_ids: string[];
    scheduled_at: Date | null;
    starts_at: Date | null;
    ends_at: Date | null;
    participant_ids: string[];
    company_id: string | null;
    call_url: string | null;
    created_at: Date;
    updated_at: Date;
    updated_by: UpdatedBy;
};

export type CreateCallInput = {
    title: string;
    description: string;
    tag_ids: string[];
    topic_ids: string[];
    scheduled_at: Date;
    starts_at: Date;
    ends_at: Date;
    participant_ids: string[];
    company_id: string | null;
    call_url: string | null;
};

export type UpdateCallInput = {
    title: string | null;
    description: string | null;
    tag_ids: string[] | null;
    topic_ids: string[] | null;
    scheduled_at: Date | null;
    starts_at: Date | null;
    ends_at: Date | null;
    participant_ids: string[] | null;
    company_id: string | null;
    call_url: string | null;
};
