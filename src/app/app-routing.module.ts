import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'trenly',
    loadChildren: () =>
      import('./trenly/trenly.module').then((m) => m.TrenlyModule),
  },
  {
    path: 'drulister',
    loadChildren: () =>
      import('./drulister/drulister.module').then((m) => m.DrulisterModule),
  },
  {
    path: 'klayve',
    loadChildren: () =>
      import('./klayve/klayve.module').then((m) => m.KlayveModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
