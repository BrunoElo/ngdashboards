import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocreditDashboardComponent } from './autocredit-dashboard/autocredit-dashboard.component';
import { AutocreditComponent } from './autocredit.component';

const routes: Routes = [
  {
    path: '',
    component: AutocreditComponent,
    children: [
      { path: 'dashboard', component: AutocreditDashboardComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocreditRoutingModule {}
