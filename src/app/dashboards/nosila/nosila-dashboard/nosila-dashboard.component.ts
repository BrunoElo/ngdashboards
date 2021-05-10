import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  LineController,
  PointElement,
  LineElement,
  Filler
);

@Component({
  selector: 'app-nosila-dashboard',
  templateUrl: './nosila-dashboard.component.html',
  styleUrls: ['./nosila-dashboard.component.css'],
})
export class NosilaDashboardComponent
  implements OnInit, AfterViewInit, CanComponentDeactivate {
  value;
  chart: Chart;
  @ViewChild('revchart') revchart: ElementRef;
  revChartContext: CanvasRenderingContext2D;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeVisitorsChart();
  }

  ngAfterViewInit() {
    // To add gradient background color to chart
    this.revChartContext = this.renderer
      .selectRootElement(this.revchart)
      .nativeElement.getContext('2d');

    const gradientFill = this.revChartContext.createLinearGradient(
      0,
      0,
      0,
      500
    ); // (0, 0,0, 500) gives vertical gradient (0, 0, 500,0) gives horizontal gradient
    gradientFill.addColorStop(0, 'rgba(116, 89, 217, 0.4)');
    gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');
    this.initializeRevenueChart(gradientFill);
  }

  initializeVisitorsChart() {
    this.chart = new Chart('visitors__chart', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            barThickness: 8,
            data: [70, 50, 85, 50, 85, 20, 50],
            backgroundColor: ['#503E9D'],
            borderRadius: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,

        scales: {
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10,
            },
          },
          x: {
            grid: { offset: false },
          },
        },
      },
    });
  }

  initializeRevenueChart(gradient) {
    this.chart = new Chart('revenue__chart', {
      type: 'line',
      data: {
        labels: [
          '',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Page Views',
            data: [2, 5, 13, 11, 5, 19, 35, 37, 30, 42, 36, 20, 20],
            borderColor: '#503E9D',
            fill: true,
            backgroundColor: gradient,
            tension: 0.5,
            pointStyle: 'line',
          },
          {
            label: 'Course Sales',
            data: [18, 17, 9, 10, 23, 34, 25, 20, 7, 4, 11, 14, 5],
            borderColor: '#fb632d',

            tension: 0.5,
            pointStyle: 'line',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 80,
            ticks: {
              stepSize: 10,
            },
          },
          x: {
            /* offset: true, */
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
