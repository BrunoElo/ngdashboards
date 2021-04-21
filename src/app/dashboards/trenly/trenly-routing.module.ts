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
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenlyRoutingModule {}
