import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { BadgeModule } from 'primeng/badge';

import { NosilaRoutingModule } from './nosila-routing.module';
import { NosilaComponent } from './nosila.component';
import { NosilaHeaderComponent } from './nosila-header/nosila-header.component';
import { NosilaDashboardComponent } from './nosila-dashboard/nosila-dashboard.component';
import { NosilaSidebarComponent } from './nosila-sidebar/nosila-sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NosilaComponent,
    NosilaHeaderComponent,
    NosilaDashboardComponent,
    NosilaSidebarComponent,
  ],
  imports: [
    CommonModule,
    NosilaRoutingModule,
    FormsModule,
    CalendarModule,
    BadgeModule,
  ],
})
export class NosilaModule {}
