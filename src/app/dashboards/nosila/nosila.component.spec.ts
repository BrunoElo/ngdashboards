import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { NosilaHeaderComponent } from './nosila-header/nosila-header.component';
import { NosilaSidebarComponent } from './nosila-sidebar/nosila-sidebar.component';

import { NosilaComponent } from './nosila.component';

describe('NosilaComponent', () => {
  let component: NosilaComponent;
  let fixture: ComponentFixture<NosilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CalendarModule, BadgeModule],
      declarations: [
        NosilaComponent,
        NosilaHeaderComponent,
        NosilaSidebarComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(NosilaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    let trenlyElement: HTMLElement = fixture.nativeElement;
    const appTrenlyHeader = trenlyElement.querySelector('app-trenly-header');
    expect(appTrenlyHeader).toBeDefined();
  });

  it('should have sidebar', () => {
    let trenlyElement: HTMLElement = fixture.nativeElement;
    const appTrenlySidebar = trenlyElement.querySelector('app-trenly-sidebar');
    expect(appTrenlySidebar).toBeDefined();
  });

  it('should have router-outlet', () => {
    let trenlyElement: HTMLElement = fixture.nativeElement;
    const routOut = trenlyElement.querySelector('router-outlet');
    expect(routOut).toBeDefined();
  });
});
