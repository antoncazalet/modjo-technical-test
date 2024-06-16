import { Module } from '@nestjs/common';
import { TranscriptsComponent } from './transcripts.component';
import { TranscriptsResolver } from './transcripts.resolver';

@Module({
    imports: [],
    providers: [TranscriptsComponent, TranscriptsResolver],
})
export class TranscriptsModule {}
