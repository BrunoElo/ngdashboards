import { Component, OnInit } from '@angular/core';
import { ArcElement, Chart, DoughnutController, Tooltip } from 'chart.js';
Chart.register(DoughnutController, ArcElement, Tooltip);

import { DataService } from 'src/app/services/data.service';
import { slideImages } from 'src/app/shared/mocks/content';

@Component({
  selector: 'app-autocredit-dashboard',
  templateUrl: './autocredit-dashboard.component.html',
  styleUrls: ['./autocredit-dashboard.component.css'],
})
export class AutocreditDashboardComponent implements OnInit {
  slideImgs = slideImages;
  isExpanded: string | boolean = true;
  chart: Chart;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isExpanded = data;
    });
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart('sampledoughnut', {
      type: 'doughnut',
      data: {
        labels: ['School Fees', 'Subscription', 'Food', 'Shopping'],
        datasets: [
          {
            label: '# of Votes',
            data: [22, 18, 12, 45],
            backgroundColor: [
              'rgba(248, 89, 81)',
              'rgba(51,51,51)',
              'rgba(57, 171, 65)',
              'rgba(248, 151, 81)',
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '70%',
      },
    });
  }
}
