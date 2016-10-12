import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class MockLearningObjectService implements InMemoryDbService {
  createDb() {
      let learning_object = [
        {id: '1', learn: 'Angular 2'},
        {id: '2', learn: 'System Design'},
        {id: '3', learn: 'UX Design'},
        {id: '4', learn: 'Business Development'},
        {id: '5', learn: 'Sales'}
      ];
      return {learning_object};
  }

}
