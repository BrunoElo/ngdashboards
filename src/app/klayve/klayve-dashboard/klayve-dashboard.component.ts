import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-klayve-dashboard',
  templateUrl: './klayve-dashboard.component.html',
  styleUrls: ['./klayve-dashboard.component.css'],
})
export class KlayveDashboardComponent implements OnInit {
  isExpanded: string | boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isExpanded = data;
    });
  }
}
