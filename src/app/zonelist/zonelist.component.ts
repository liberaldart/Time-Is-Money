import { Component, OnInit } from '@angular/core';
import { InMemoryLearningDataApi } from '../shared/learningDataApiService/in-memory-learning-data-api.service';
import { LearningObject } from '../shared/learningDataApiService/learningobject';

@Component({
  selector: 'app-zonelist',
  templateUrl: './zonelist.component.html',
  styleUrls: ['./zonelist.component.css']
})
export class ZonelistComponent implements OnInit {

  constructor(
    private InMemoryLearningDataApi: InMemoryLearningDataApi
  ) { }

  learning_object_s: LearningObject[];
  ngOnInit() {
    this.get_learning_objects();
  }

  get_learning_objects(): void {
    this.InMemoryLearningDataApi.getLearningObjects().then(learningobject => this.learning_object_s = learningobject);
  }

}
