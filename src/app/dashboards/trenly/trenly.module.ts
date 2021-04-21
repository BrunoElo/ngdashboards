import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrenlyRoutingModule } from './trenly-routing.module';
import { TrenlyComponent } from './trenly.component';
import { TrenlyDashboardComponent } from './trenly-dashboard/trenly-dashboard.component';
import { TrenlySidebarComponent } from './trenly-sidebar/trenly-sidebar.component';
import { TrenlyHeaderComponent } from './trenly-header/trenly-header.component';


@NgModule({
  declarations: [TrenlyComponent, TrenlyDashboardComponent, TrenlySidebarComponent, TrenlyHeaderComponent],
  imports: [
    CommonModule,
    TrenlyRoutingModule
  ]
})
export class TrenlyModule { }
