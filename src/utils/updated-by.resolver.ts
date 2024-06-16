import { ResolveField, Resolver } from '@nestjs/graphql';
import { UpdatedBy, UpdatedByTypeName } from './updated-by.type';

@Resolver('UpdatedBy')
export class UpdatedByResolver {
    @ResolveField('__resolveType')
    resolveType(updatedBy: UpdatedBy): UpdatedByTypeName {
        if ('user_id' in updatedBy) {
            return 'UserUpdatedBy';
        }

        return 'AsyncWorkerUpdatedBy';
    }
}
