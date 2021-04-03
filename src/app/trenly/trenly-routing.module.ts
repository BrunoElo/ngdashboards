import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrenlyDashboardComponent } from './trenly-dashboard/trenly-dashboard.component';
import { TrenlyComponent } from './trenly.component';

const routes: Routes = [
  {
    path: '',
    component: TrenlyComponent,
    children: [
      {
        path: 'dashboard',
        component: TrenlyDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenlyRoutingModule {}
