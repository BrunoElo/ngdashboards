import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TrenlyHeaderComponent } from './trenly-header/trenly-header.component';
import { TrenlySidebarComponent } from './trenly-sidebar/trenly-sidebar.component';

import { TrenlyComponent } from './trenly.component';

describe('TrenlyComponent', () => {
  let component: TrenlyComponent;
  let fixture: ComponentFixture<TrenlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        TrenlyComponent,
        TrenlyHeaderComponent,
        TrenlySidebarComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TrenlyComponent);
    component = fixture.componentInstance;
  });

  it('should create the module', () => {
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
