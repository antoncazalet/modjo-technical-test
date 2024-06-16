import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CallsComponent } from './calls.component';
import { CreateCallInput, UpdateCallInput } from './types/calls.type';

@Resolver('Call')
export class CallsResolver {
    constructor(private readonly callsComponent: CallsComponent) {}

    @Query('Calls')
    async getCalls() {
        return this.callsComponent.findAll();
    }

    @Query('Call')
    async getCallById(@Args('id') id: string) {
        return this.callsComponent.findOneById(id);
    }

    @Mutation('createCall')
    async createCall(@Args('input') input: CreateCallInput) {
        return this.callsComponent.create(input);
    }

    @Mutation('updateCall')
    async updateCall(
        @Args('id') id: string,
        @Args('input') input: UpdateCallInput
    ) {
        return this.callsComponent.update(id, input);
    }
}
