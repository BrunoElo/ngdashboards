import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nosila-header',
  templateUrl: './nosila-header.component.html',
  styleUrls: ['./nosila-header.component.css'],
})
export class NosilaHeaderComponent implements OnInit {
  isCollapsed;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.dataService.sendNavState(this.isCollapsed);
  }
}
