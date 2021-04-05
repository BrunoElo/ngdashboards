import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrulisterDashboardComponent } from './drulister-dashboard/drulister-dashboard.component';
import { DrulisterComponent } from './drulister.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: DrulisterComponent,
    children: [
      {
        path: 'dashboard',
        component: DrulisterDashboardComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrulisterRoutingModule {}
