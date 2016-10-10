import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZonelistComponent } from './zonelist/zonelist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: ZonelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TimeIsMoneyRoutingModule { }
