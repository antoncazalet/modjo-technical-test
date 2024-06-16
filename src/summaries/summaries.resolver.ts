import { Args, Query, Resolver } from '@nestjs/graphql';
import { SummariesComponent } from './summaries.component';

@Resolver('Summary')
export class SummariesResolver {
    constructor(private readonly summariesComponent: SummariesComponent) {}

    @Query('SummaryByCallId')
    async getSummaryByCallId(@Args('call_id') callId: string) {
        return this.summariesComponent.findByCallId(callId);
    }
}
