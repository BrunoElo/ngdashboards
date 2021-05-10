import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLazyLoadGuard } from './guards/auth-lazy-load.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'trenly',
    loadChildren: () =>
      import('./dashboards/trenly/trenly.module').then((m) => m.TrenlyModule),
    canLoad: [AuthLazyLoadGuard],
  },
  {
    path: 'drulister',
    loadChildren: () =>
      import('./dashboards/drulister/drulister.module').then(
        (m) => m.DrulisterModule
      ),
    canLoad: [AuthLazyLoadGuard],
  },
  {
    path: 'klayve',
    loadChildren: () =>
      import('./dashboards/klayve/klayve.module').then((m) => m.KlayveModule),
    canLoad: [AuthLazyLoadGuard],
  },
  {
    path: 'autocredit',
    loadChildren: () =>
      import('./dashboards/autocredit/autocredit.module').then(
        (m) => m.AutocreditModule
      ),
    canLoad: [AuthLazyLoadGuard],
  },
  {
    path: 'nosila',
    loadChildren: () =>
      import('./dashboards/nosila/nosila.module').then((m) => m.NosilaModule),
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: '',
    redirectTo: 'nosila',
    pathMatch: 'full',
    /* component: HomeComponent, 
    canActivate: [AuthLazyLoadGuard],*/
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
