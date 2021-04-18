import { Component, OnInit } from '@angular/core';
import { cardInfo, projects } from 'src/app/shared/mocks/content';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-drulister-dashboard',
  templateUrl: './drulister-dashboard.component.html',
  styleUrls: ['./drulister-dashboard.component.css'],
})
export class DrulisterDashboardComponent implements OnInit {
  menuToggler: string | boolean;
  cardInfo = cardInfo;
  projects = projects;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.menuToggler = data;
    });
  }

  colorStatus(status: string) {
    return status === 'review'
      ? 'rebeccapurple'
      : status === 'in progress'
      ? 'deeppink'
      : 'orangered';
  }
}
