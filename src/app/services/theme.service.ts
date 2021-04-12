import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Observable string sources
  private themeToggleSource = new Subject<string>();

  // Observable string streams
  themeToggle$ = this.themeToggleSource.asObservable();

  constructor() {}

  // Service message commands
  sendThemeChoice(data: string) {
    this.themeToggleSource.next(data);
  }

  // Get theme from local storage
  getTheme() {
    return localStorage.getItem('theme');
  }

  setTheme(themeType: string) {
    localStorage.setItem('theme', themeType);
  }
}
