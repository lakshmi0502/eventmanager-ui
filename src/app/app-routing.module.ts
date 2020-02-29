import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './component/event-list/event-list.component';
import { AddEventComponentComponent } from './add-event-component/add-event-component.component';


const routes: Routes = [
  {
    path:'events',
    component:EventListComponent
  },
  {
    path:'add-events',
    component:AddEventComponentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
