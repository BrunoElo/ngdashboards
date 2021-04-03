import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Observable string sources
  private navToggleSource = new Subject<string>();
  // Observable string streams
  navToggle$ = this.navToggleSource.asObservable();

  constructor() {}

  // Service message commands
  sendNavState(data: string) {
    this.navToggleSource.next(data);
  }
}
