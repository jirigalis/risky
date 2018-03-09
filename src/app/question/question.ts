import { Topic } from '../topics/topic';

export class Question {
    id: number;
    text: string;
    level: number;
    attachment: string = "";
    topics;
}