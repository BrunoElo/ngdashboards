import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocreditRoutingModule } from './autocredit-routing.module';
import { AutocreditComponent } from './autocredit.component';
import { AutocreditHeaderComponent } from './autocredit-header/autocredit-header.component';
import { AutocreditDashboardComponent } from './autocredit-dashboard/autocredit-dashboard.component';
import { AutocreditSidebarComponent } from './autocredit-sidebar/autocredit-sidebar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AutocreditComponent,
    AutocreditHeaderComponent,
    AutocreditDashboardComponent,
    AutocreditSidebarComponent,
  ],
  imports: [CommonModule, AutocreditRoutingModule, SharedModule],
})
export class AutocreditModule {}
