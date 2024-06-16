export type KeyPoint = {
    category:
        | 'CUSTOMER_INFORMATION'
        | 'CUSTOMER_OBSERVATION'
        | 'OBJECTIONS'
        | 'NEXT_STEPS'
        | 'COMPETITOR_INFORMATION'
        | 'PRICING'
        | 'PRODUCT_INFORMATION'
        | 'OTHER';
    content: string;
    timestamp: Date;
};

export type Summary = {
    id: string;
    call_id: string;
    language: string;
    key_points: KeyPoint[];
};

export type CreateSummaryInput = Omit<Summary, 'id'>;
