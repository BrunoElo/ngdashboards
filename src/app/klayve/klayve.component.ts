import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-klayve',
  templateUrl: './klayve.component.html',
  styleUrls: ['./klayve.component.css'],
  host: {
    '[class.light]': 'themeType === "light"',
    '[class.dark]': 'themeType === "dark"', // module scoped CSS
    /* '(click)': 'closeDropdown($event)', */ //Closing dropdown with changeDetection method
  },
})
export class KlayveComponent implements OnInit {
  themeType: string;
  closeDropdownMenu; // to be sent to child(header)
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeType = this.themeService.getTheme();

    // Theme switch with a service
    /* this.themeService.themeToggle$.subscribe((data) => {
      this.themeType = data;
      this.themeService.setTheme(this.themeType);
    }); */
  }

  // Theme switch with child(Output()) to parent interaction
  onThemeMode(event: string) {
    this.themeType = event;
    this.themeService.setTheme(this.themeType);
  }

  /* Closing dropdown with changeDetection method
  closeDropdown(event) {
    console.log(event);
    this.closeDropdownMenu = true;
    // Use a setTimeout to reset the value
    setTimeout(() => {
      this.closeDropdownMenu = false;
    }, 2000);
  } */
}
