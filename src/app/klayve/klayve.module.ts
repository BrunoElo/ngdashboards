import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlayveRoutingModule } from './klayve-routing.module';
import { KlayveComponent } from './klayve.component';
import { KlayveDashboardComponent } from './klayve-dashboard/klayve-dashboard.component';
import { KlayveHeaderComponent } from './klayve-header/klayve-header.component';
import { KlayveSidebarComponent } from './klayve-sidebar/klayve-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    KlayveComponent,
    KlayveDashboardComponent,
    KlayveHeaderComponent,
    KlayveSidebarComponent,
  ],
  imports: [CommonModule, KlayveRoutingModule, FontAwesomeModule],
})
export class KlayveModule {}
