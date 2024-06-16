import { Injectable } from '@nestjs/common';
import { Summary, CreateSummaryInput } from './types/summaries.type';
import { SampleSummary } from '../utils/sample-data';
import { randomUUID } from 'crypto';

@Injectable()
export class SummariesComponent {
    private readonly summaries: Summary[] = [SampleSummary];

    findByCallId(callId: string): Summary | null {
        return (
            this.summaries.find((summary) => summary.call_id === callId) ?? null
        );
    }

    // Assume that the summaries would be created by an async worker
    // @OnSNSFifoEvent({
    //     queue: 'summaries',
    //     name: 'create_summary',
    // })
    createTranscript(summary: CreateSummaryInput) {
        return this.summaries.push({
            id: randomUUID(),
            created_at: new Date(),
            updated_at: new Date(),
            updated_by: {
                event_id: randomUUID(),
                event_name: 'SUMMARY_GENERATED',
            },
            ...summary,
        });
    }
}
