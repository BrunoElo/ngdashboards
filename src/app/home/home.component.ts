import { Component, OnInit } from '@angular/core';
import { dashboardList } from '../mocks/dashboards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dashboards = dashboardList;
  constructor() {}

  ngOnInit(): void {}
}
