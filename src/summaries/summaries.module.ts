import { Module } from '@nestjs/common';
import { SummariesComponent } from './summaries.component';
import { SummariesResolver } from './summaries.resolver';

@Module({
    imports: [],
    providers: [SummariesComponent, SummariesResolver],
})
export class SummariesModule {}
