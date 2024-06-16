import { Args, Query, Resolver } from '@nestjs/graphql';
import { TranscriptsComponent } from './transcripts.component';

@Resolver('Transcript')
export class TranscriptsResolver {
    constructor(private readonly transcriptsComponent: TranscriptsComponent) {}

    @Query('TranscriptsByCallId')
    async getTranscriptsByCallId(@Args('call_id') callId: string) {
        return this.transcriptsComponent.findByCallId(callId);
    }
}
