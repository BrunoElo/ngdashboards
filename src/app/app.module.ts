import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faKickstarterK } from '@fortawesome/free-brands-svg-icons';
import {
  faArchive,
  faBars,
  faBell,
  faChartBar,
  faCircle,
  faCog,
  faEllipsisH,
  faEnvelope,
  faMoon,
  faSearch,
  faSun,
  faTasks,
  faThLarge,
  faUser,
  faUsers,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCircle,
      faEllipsisH,
      faArchive,
      faChartBar,
      faCog,
      faEnvelope,
      faTasks,
      faThLarge,
      faUser,
      faUsers,
      faWrench,
      faBell,
      faBars,
      faKickstarterK,
      faSearch,
      faSun,
      faMoon
    );
  }
}
