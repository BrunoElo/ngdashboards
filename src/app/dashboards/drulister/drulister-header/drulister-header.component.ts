import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-drulister-header',
  templateUrl: './drulister-header.component.html',
  styleUrls: ['./drulister-header.component.css'],
})
export class DrulisterHeaderComponent implements OnInit {
  menuToggler: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // UI event
    /* this.dataService.resize$.subscribe((data) => {
      if (data.target['innerWidth'] > 679) {
        this.menuToggler = false;
      }
    }); */
  }

  toggleSideBar() {
    this.menuToggler = !this.menuToggler;

    this.dataService.sendNavState(this.menuToggler);
    /* if (this.menuToggler) {
      this.menuToggler = 'sidebar-close';
      return;
    }
    this.menuToggler = ''; */
  }
}
