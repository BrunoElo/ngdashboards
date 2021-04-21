import { Component, OnInit } from '@angular/core';
import { sidebarMenus } from 'src/app/shared/mocks/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trenly-sidebar',
  templateUrl: './trenly-sidebar.component.html',
  styleUrls: ['./trenly-sidebar.component.css', '../trenly-global.css'],
})
export class TrenlySidebarComponent implements OnInit {
  menus;
  sidebarToggle: string | boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.menus = sidebarMenus;
  }

  toggle() {
    this.sidebarToggle = !this.sidebarToggle;
    if (this.sidebarToggle) {
      this.sidebarToggle = 'sidebar-close';
      this.dataService.sendNavState(this.sidebarToggle);
      return;
    }
    this.sidebarToggle = '';
    this.dataService.sendNavState(this.sidebarToggle);
  }
}
