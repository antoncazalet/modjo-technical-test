export type UserType = 'ADMINISTRATOR' | 'USER';

export type UserUpdatedBy = {
    user_id: string;
    type: UserType;
};

export type AsyncWorkerUpdatedBy = {
    event_name: string;
    event_id: string;
};

export type UpdatedBy = UserUpdatedBy | AsyncWorkerUpdatedBy;
export type UpdatedByTypeName = 'UserUpdatedBy' | 'AsyncWorkerUpdatedBy';
