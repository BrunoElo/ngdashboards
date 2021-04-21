import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlayveDashboardComponent } from './klayve-dashboard/klayve-dashboard.component';
import { KlayveComponent } from './klayve.component';

const routes: Routes = [
  {
    path: '',
    component: KlayveComponent,
    children: [
      {
        path: 'dashboard',
        component: KlayveDashboardComponent,
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlayveRoutingModule {}
