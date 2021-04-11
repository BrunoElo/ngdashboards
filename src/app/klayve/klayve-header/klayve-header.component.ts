import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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

  constructor(
    private dataService: DataService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.setThemeIcon();
  }

  // Monitor changes from parent on input()
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.closeDropdown.currentValue);
    if (changes.closeDropdown.currentValue) {
      // Close all header dropdowns
      this.isOpen = false;
      this.isProfileOpen = false;
    }
  }

  toggleDropdown(event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  toggleProfileDropdown(event) {
    event.stopPropagation();
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.dataService.sendNavState(this.isCollapsed);
  }

  changeTheme(event) {
    this.themeMode.emit(event.target.dataset.theme);
    this.isDark = !this.isDark;

    // Theme switch with service
    //this.themeService.sendThemeChoice(event.target.dataset.theme);
  }

  setThemeIcon() {
    const theme = this.themeService.getTheme();
    this.isDark = theme === 'dark' ? true : false;
  }
}
