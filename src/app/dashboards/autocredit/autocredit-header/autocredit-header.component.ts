import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-autocredit-header',
  templateUrl: './autocredit-header.component.html',
  styleUrls: ['./autocredit-header.component.css'],
})
export class AutocreditHeaderComponent implements OnInit {
  isExpanded: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.dataService.sendNavState(this.isExpanded);
  }
}
