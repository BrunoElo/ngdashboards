import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nosila-sidebar',
  templateUrl: './nosila-sidebar.component.html',
  styleUrls: ['./nosila-sidebar.component.css'],
  animations: [
    trigger('dropdown', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
      transition('* => void', [
        animate(200, style({ opacity: 0, transform: 'translateY(-50px)' })),
      ]),
    ]),
  ],
})
export class NosilaSidebarComponent implements OnInit {
  isExpanded;
  dropdownClicked;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isExpanded = data;
    });
  }
  toggleSubmenu() {
    this.dropdownClicked = !this.dropdownClicked;
  }
}
