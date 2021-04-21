import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trenly-header',
  templateUrl: './trenly-header.component.html',
  styleUrls: ['./trenly-header.component.css'],
})
export class TrenlyHeaderComponent implements OnInit {
  adjustWidth: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.adjustWidth = data;
    });
  }
}
