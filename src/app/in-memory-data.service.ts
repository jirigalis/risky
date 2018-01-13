import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const topics = [
            {title: 'Mammals', desc: 'Lorem ipsum dolor sit amet.'},
            {title: 'Trees', desc: 'Lorem ipsum dolor sit amet.'},
            {title: 'Plants', desc: 'Lorem ipsum dolor sit amet.'},
            {title: 'Fish, amphibians, reptiles', desc: 'Lorem ipsum dolor sit amet.'},
            {title: 'Birds', desc: 'Lorem ipsum dolor sit amet.'},
        ];
        return { topics };
    }
}