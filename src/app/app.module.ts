import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';


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
    TimeIsMoneyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
