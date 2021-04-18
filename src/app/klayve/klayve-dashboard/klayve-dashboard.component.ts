import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { klayveTable, progressInfo } from 'src/app/shared/mocks/content';
import { overviews } from 'src/app/shared/mocks/numbers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-klayve-dashboard',
  templateUrl: './klayve-dashboard.component.html',
  styleUrls: ['./klayve-dashboard.component.css'],
})
export class KlayveDashboardComponent implements OnInit {
  isExpanded: string | boolean;
  overviews = overviews;
  tableData = klayveTable;
  progresses = progressInfo;

  constructor(private dataService: DataService) {}
  chart: Chart;

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isExpanded = data;
    });
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart('sampleChart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of upvotes',
            data: [22, 19, 30, 5, 12, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: '# of downvotes',
            data: [2, 62, 6, 55, 17, 14],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  colorStatus(status: string) {
    return status === 'completed'
      ? 'var(--success-color)'
      : status === 'in progress'
      ? 'var(--primary-color)'
      : 'var(--warning-color)';
  }

  progressColor(value: number) {
    return value <= 30
      ? 'var(--danger-color)'
      : value > 30 && value < 50
      ? 'var(--warning-color)'
      : value >= 50 && value < 75
      ? 'var(--primary-color)'
      : 'var(--success-color)';
  }
}
