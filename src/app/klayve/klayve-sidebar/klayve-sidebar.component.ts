import { Component, OnInit } from '@angular/core';
import { drulisterMenus, klayveMenus } from 'src/app/shared/mocks/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-klayve-sidebar',
  templateUrl: './klayve-sidebar.component.html',
  styleUrls: ['./klayve-sidebar.component.css'],
})
export class KlayveSidebarComponent implements OnInit {
  sidebarMenus = klayveMenus;
  isCollapsed: string | boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isCollapsed = data;
    });
  }
}
