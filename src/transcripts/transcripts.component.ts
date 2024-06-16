import { Injectable } from '@nestjs/common';
import { CreateTranscriptInput, Transcript } from './types/transcripts.type';
import { SamplesTranscripts } from '../utils/sample-data';
import { randomUUID } from 'crypto';

@Injectable()
export class TranscriptsComponent {
    private readonly transcripts: Transcript[] = [...SamplesTranscripts];

    findByCallId(callId: string): Transcript[] {
        return (
            this.transcripts.filter(
                (transcript) => transcript.call_id === callId
            ) ?? []
        );
    }

    // Assume that the transcript would be created by an async worker
    // @OnSNSFifoEvent({
    //     queue: 'transcripts',
    //     name: 'create_transcript',
    // })
    createTranscript(transcript: CreateTranscriptInput) {
        return this.transcripts.push({
            id: randomUUID(),
            ...transcript,
        });
    }
}
