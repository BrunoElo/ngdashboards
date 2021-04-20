import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-autocredit-sidebar',
  templateUrl: './autocredit-sidebar.component.html',
  styleUrls: ['./autocredit-sidebar.component.css'],
})
export class AutocreditSidebarComponent implements OnInit {
  isCollapsed: string | boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isCollapsed = data;
    });
  }
}
