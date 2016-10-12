import { Http } from '@angular/http';

import { Injectable }    from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { LearningObject } from '../../shared/learningDataApiService/learningobject';

@Injectable()
export class InMemoryLearningDataApi {
    private learningObjectUrl = 'app/learning_object'; //URL for web api

    constructor(private http: Http) {

    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getLearningObjects(): Promise<LearningObject[]> {
      return this.http.get(this.learningObjectUrl)
                .toPromise()
                .then(response => response.json().data as LearningObject[])
                .catch(this.handleError);
    }
}
