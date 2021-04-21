import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrulisterRoutingModule } from './drulister-routing.module';
import { DrulisterComponent } from './drulister.component';
import { DrulisterDashboardComponent } from './drulister-dashboard/drulister-dashboard.component';
import { DrulisterHeaderComponent } from './drulister-header/drulister-header.component';
import { DrulisterSidebarComponent } from './drulister-sidebar/drulister-sidebar.component';

@NgModule({
  declarations: [
    DrulisterComponent,
    DrulisterDashboardComponent,
    DrulisterHeaderComponent,
    DrulisterSidebarComponent,
  ],
  imports: [CommonModule, DrulisterRoutingModule],
})
export class DrulisterModule {}
