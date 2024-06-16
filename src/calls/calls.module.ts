import { Module } from '@nestjs/common';
import { CallsComponent } from './calls.component';
import { CallsResolver } from './calls.resolver';

@Module({
    imports: [],
    providers: [CallsComponent, CallsResolver],
})
export class CallsModule {}
