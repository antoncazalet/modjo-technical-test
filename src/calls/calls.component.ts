import { Injectable } from '@nestjs/common';
import { Call, CreateCallInput, UpdateCallInput } from './types/calls.type';
import { randomUUID } from 'crypto';
import { SampleCall } from '../utils/sample-data';

const filterOutUndefined = (obj: Record<string, unknown>) =>
    Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== undefined)
    );

@Injectable()
export class CallsComponent {
    private readonly calls: Call[] = [SampleCall];

    create(input: CreateCallInput): Call {
        const index = this.calls.push({
            id: randomUUID(),
            creator_id: randomUUID(),
            status: input.scheduled_at ? 'SCHEDULED' : 'DRAFT',
            created_at: new Date(),
            updated_at: new Date(),
            updated_by: {
                type: 'USER',
                user_id: randomUUID(),
            },
            ...input,
        });

        return this.calls[index - 1];
    }

    update(id: string, input: UpdateCallInput): Call | null {
        const index = this.calls.findIndex((call) => call.id === id);

        if (index === -1) {
            return null;
        }

        // An ORM would handle this for you
        this.calls[index] = {
            ...this.calls[index],
            ...filterOutUndefined(input),
            updated_at: new Date(),
            // updatedBy...
        };

        return this.calls[index];
    }

    findAll(): Call[] {
        return this.calls;
    }

    findOneById(id: string): Call | null {
        return this.calls.find((call) => call.id === id) ?? null;
    }
}
