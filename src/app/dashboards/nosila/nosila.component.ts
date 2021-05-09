import { Component, HostBinding, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nosila',
  templateUrl: './nosila.component.html',
  styleUrls: ['./nosila.component.css'],
})
export class NosilaComponent implements OnInit {
  @HostBinding('class.collapsed') isCollapsed;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.navToggle$.subscribe((data) => {
      this.isCollapsed = data;
    });
  }
}
