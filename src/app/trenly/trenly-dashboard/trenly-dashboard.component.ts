import { Component, OnInit } from '@angular/core';
import { tableInfo } from 'src/app/mocks/content';
import { money } from 'src/app/mocks/numbers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trenly-dashboard',
  templateUrl: './trenly-dashboard.component.html',
  styleUrls: ['./trenly-dashboard.component.css', '../trenly-global.css'],
})
export class TrenlyDashboardComponent implements OnInit {
  monies;
  recents;
  adjustWidth: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.monies = money;
    this.recents = tableInfo;
    this.dataService.navToggle$.subscribe((data) => {
      this.adjustWidth = data;
    });
  }
}
