import { Component, OnInit } from '@angular/core';
import { slideImages } from 'src/app/shared/mocks/content';

@Component({
  selector: 'app-autocredit-dashboard',
  templateUrl: './autocredit-dashboard.component.html',
  styleUrls: ['./autocredit-dashboard.component.css'],
})
export class AutocreditDashboardComponent implements OnInit {
  slideImgs = slideImages;

  constructor() {}

  ngOnInit(): void {}
}
