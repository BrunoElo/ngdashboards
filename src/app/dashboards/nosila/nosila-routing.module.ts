import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosilaDashboardComponent } from './nosila-dashboard/nosila-dashboard.component';
import { NosilaComponent } from './nosila.component';

const routes: Routes = [
  {
    path: '',
    component: NosilaComponent,
    children: [
      { path: 'dashboard', component: NosilaDashboardComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosilaRoutingModule {}
