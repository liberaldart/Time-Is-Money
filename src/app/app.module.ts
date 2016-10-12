import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { MockLearningObjectService } from './shared/inMemoryLearningObjectService/MockLearningObjectService.service';
import { InMemoryLearningDataApi } from './shared/learningDataApiService/in-memory-learning-data-api.service';

import { AppComponent } from './app.component';
import { TimeIsMoneyRoutingModule } from './app-routing.module';
import { ZonelistComponent } from './zonelist/zonelist.component';

@NgModule({
  declarations: [
    AppComponent,
    ZonelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TimeIsMoneyRoutingModule,
    InMemoryWebApiModule.forRoot(MockLearningObjectService),
  ],
  providers: [
    InMemoryLearningDataApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
