import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Observable string sources
  private navToggleSource = new Subject<string | boolean>();
  // Observable string streams
  navToggle$ = this.navToggleSource.asObservable();
  // Observable for window resize event
  resize$ = fromEvent(window, 'resize');

  constructor() {}

  // Service message commands
  sendNavState(data: string | boolean) {
    this.navToggleSource.next(data);
  }
}
