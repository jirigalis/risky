export class Event {
	id: number;
	author: number;
	created: number;
	updated: number;
	state: EventState;
}

export enum EventState {
	Created = 'CREATED',
	Opened = 'OPENED',
	Finished = 'FINISHED'
}