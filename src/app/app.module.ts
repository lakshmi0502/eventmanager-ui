import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './component/event/event.component';
import { EventListComponent } from './component/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEventComponentComponent } from './add-event-component/add-event-component.component';
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    AddEventComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
