import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'trenly',
    loadChildren: () =>
      import('./dashboards/trenly/trenly.module').then((m) => m.TrenlyModule),
  },
  {
    path: 'drulister',
    loadChildren: () =>
      import('./dashboards/drulister/drulister.module').then(
        (m) => m.DrulisterModule
      ),
  },
  {
    path: 'klayve',
    loadChildren: () =>
      import('./dashboards/klayve/klayve.module').then((m) => m.KlayveModule),
  },
  {
    path: 'autocredit',
    loadChildren: () =>
      import('./dashboards/autocredit/autocredit.module').then(
        (m) => m.AutocreditModule
      ),
  },
  {
    path: 'nosila',
    loadChildren: () =>
      import('./dashboards/nosila/nosila.module').then((m) => m.NosilaModule),
  },

  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
