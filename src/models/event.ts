import { Member } from './member';

export interface Event {
    dateTime?: Date;
    id?: number;
    description?: string;
    members?: [Member];
    status?: string;
    title?: string;
}
