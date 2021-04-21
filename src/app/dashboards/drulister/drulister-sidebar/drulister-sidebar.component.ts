import { Component, OnInit, ViewChild } from '@angular/core';
import { drulisterMenus } from 'src/app/shared/mocks/menu';
import { sideMenu } from 'src/app/shared/models/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-drulister-sidebar',
  templateUrl: './drulister-sidebar.component.html',
  styleUrls: ['./drulister-sidebar.component.css'],
})
export class DrulisterSidebarComponent implements OnInit {
  druSideMenus: sideMenu[] = drulisterMenus;
  collapseSideMenu: string | boolean;
  @ViewChild('sidebarmenu') sidebarmenu;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    /* this.dataService.resize$.subscribe((data) => {
      if (data.target['innerWidth'] > 679 && this.collapseSideMenu) {
        this.collapseSideMenu = !this.collapseSideMenu;
      }
    }); */

    this.dataService.navToggle$.subscribe((data) => {
      this.collapseSideMenu = data;
      //console.log(data);
      //this.toggleScroll(this.collapseSideMenu);
    });
    //this.checkViewPort();
  }

  // disables scrolling when sidebar is open
  toggleScroll(toggler) {
    //console.log(toggler);
    if (!toggler) {
      this.sidebarmenu.nativeElement.ownerDocument.body.style.overflow =
        'hidden';
      return;
    }
    this.sidebarmenu.nativeElement.ownerDocument.body.style.overflow = '';
  }

  checkViewPort() {
    if (window.innerWidth < 681) {
      this.collapseSideMenu = true;
    }
  }

  /* disableScrolling(toggler) {
    if (toggler) {
      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    }
  }

  enableScrolling() {
    window.onscroll = function () {};
  } */
}
