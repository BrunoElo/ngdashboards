import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { notifications, profileOptions } from 'src/app/mocks/content';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-klayve-header',
  templateUrl: './klayve-header.component.html',
  styleUrls: ['./klayve-header.component.css'],
})
export class KlayveHeaderComponent implements OnInit {
  notifications = notifications;
  options = profileOptions;
  isOpen: boolean;
  isProfileOpen: any;
  isCollapsed: boolean;
  isDark: boolean;

  @Input() closeDropdown;
  @Output() themeMode = new EventEmitter<string>();
  bodyRemoveListener: () => void;

  constructor(
    private dataService: DataService,
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setThemeIcon();
  }

  /* Closing dropdown with changeDetection method
  // Monitor changes from parent on input()
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.closeDropdown.currentValue);
    if (changes.closeDropdown.currentValue) {
      // Close all header dropdowns
      this.isOpen = false;
      this.isProfileOpen = false;
    }
  }
 */

  toggleDropdown(event) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      if (!this.isProfileOpen) {
        // Adds listener if other dropdown has not
        this.listenForBodyClick();
      }
      event.stopPropagation();
    } else {
      this.bodyRemoveListener();
    }
  }

  toggleProfileDropdown(event) {
    this.isProfileOpen = !this.isProfileOpen;
    if (this.isProfileOpen) {
      if (!this.isOpen) {
        // Adds listener if other dropdown has not
        this.listenForBodyClick();
      }
      event.stopPropagation();
    } else {
      this.bodyRemoveListener();
    }
  }

  //Attach event listener on body element to trigger closing dropdowns
  listenForBodyClick() {
    this.bodyRemoveListener = this.renderer.listen('body', 'click', (event) => {
      //console.log('click', event);
      // Close all header dropdowns
      this.isOpen = false;
      this.isProfileOpen = false;
      this.bodyRemoveListener(); // remove listener
    });
  }
  /* 
  bodyEventListenerHandlerForDropdown(state, event) {
    if (state) {
      this.listenForBodyClick();
      event.stopPropagation();
    } else {
      this.bodyRemoveListener();
    }
  } */

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.dataService.sendNavState(this.isCollapsed);
  }

  changeTheme(event) {
    // Theme switch with Output()
    this.themeMode.emit(event.target.dataset.theme);
    this.isDark = !this.isDark;

    // Theme switch with service
    //this.themeService.sendThemeChoice(event.target.dataset.theme);
  }

  setThemeIcon() {
    const theme = this.themeService.getTheme();
    this.isDark = theme === 'dark' ? true : false;
  }

  ngOnDestroy() {
    this.bodyRemoveListener();
  }
}
