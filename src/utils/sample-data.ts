import { randomUUID } from 'crypto';
import { Call } from '../calls/types/calls.type';
import { Transcript } from '../transcripts/types/transcripts.type';
import { KeyPoint, Summary } from '../summaries/types/summaries.type';

export const SampleCall = {
    id: randomUUID(),
    title: 'Demo Modjo x Mdojo',
    scheduled_at: new Date('2024-06-16T14:00:00Z'),
    starts_at: new Date('2024-06-16T14:00:00Z'),
    ends_at: new Date('2024-06-16T15:00:00Z'),
    status: 'COMPLETED',
    company_id: randomUUID(),
    call_url: 'https://meet.google.com/abc-defg-hij',
    creator_id: randomUUID(),
    description: 'This is a demo call between Modjo and Mdojo.',
    participant_ids: [randomUUID(), randomUUID()],
    tag_ids: [randomUUID(), randomUUID()],
    topic_ids: [randomUUID(), randomUUID()],
    created_at: new Date(),
    updated_at: new Date(),
    updated_by: {
        type: 'USER',
        user_id: randomUUID(),
    },
} satisfies Call;

const CallTranscripts = [
    'Hello, this is Modjo.',
    'Hello, this is Mdojo.',
    'How are you?',
    'I am good, thank you.',
    'How can I help you?',
    'We have a new product that I think would complement your current offerings well.',
    'That sounds interesting. Can you tell me more about the product?',
    "Of course. It's a software solution that improves sales efficiency and customer engagement.",
    'That definitely aligns with our needs. How does it work?',
    'It integrates with existing tools and offers features like transcripts, analytics, and livenotes',
    'That sounds promising. Do you have any case studies or references?',
    'Yes, I can send over some materials after our call. When would be a good time to follow up?',
    "How about next Tuesday afternoon? I'm available after 2 PM.",
    "Great, I'll send over the information and follow up next Tuesday at 2 PM. Thanks for your time..",
];

export const SamplesTranscripts = CallTranscripts.map<Transcript>(
    (text, index) => ({
        id: randomUUID(),
        call_id: SampleCall.id,
        language: 'en-US',
        participant_id:
            index % 2 === 0
                ? SampleCall.participant_ids[0]
                : SampleCall.participant_ids[1],
        topic_id: randomUUID(),
        content: text,
        timestamp: new Date(
            SampleCall.scheduled_at.getTime() + index * 60 * 1000
        ),
        created_at: new Date(),
        updated_at: new Date(),
        updated_by: {
            event_id: randomUUID(),
            event_name: 'TRANSCRIPT_GENERATED',
        },
    })
);

const KeyPoints = [
    {
        category: 'CUSTOMER_INFORMATION',
        content: 'None of the participants know about Modjo',
    },
    {
        category: 'PRICING',
        content: 'Mdojo is ready to pay $1000 per user for the software',
    },
    {
        category: 'OBJECTIONS',
        content: 'They need case studies and references',
    },
    {
        category: 'NEXT_STEPS',
        content: 'They scheduled a follow-up call for next Tuesday at 2 PM',
    },
] satisfies Omit<KeyPoint, 'timestamp'>[];

export const SampleSummary = {
    call_id: SampleCall.id,
    id: randomUUID(),
    language: 'en-US',
    key_points: KeyPoints.map<KeyPoint>((keyPoint, index) => ({
        ...keyPoint,
        timestamp: new Date(
            SampleCall.scheduled_at.getTime() + index * 60 * 1000
        ),
    })),
    created_at: new Date(),
    updated_at: new Date(),
    updated_by: {
        event_id: randomUUID(),
        event_name: 'SUMMARY_GENERATED',
    },
} satisfies Summary;
