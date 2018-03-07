export class Event {
	id: number;
	author: number;
	created: number;
	updated: number;
	state: EventState;
	competitors;
	topics;
	questionCount: number;
}

export enum EventState {
	Created = 'CREATED',
	Opened = 'OPENED',
	Finished = 'FINISHED'
}