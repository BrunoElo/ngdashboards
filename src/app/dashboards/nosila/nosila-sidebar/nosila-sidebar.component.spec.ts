import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { NosilaSidebarComponent } from './nosila-sidebar.component';

describe('NosilaSidebarComponent', () => {
  let component: NosilaSidebarComponent;
  let fixture: ComponentFixture<NosilaSidebarComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    dataServiceMock = jasmine.createSpyObj('DataService', null, {
      navToggle$: of(),
    });

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [NosilaSidebarComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NosilaSidebarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isExpanded should be false', () => {
    fixture.detectChanges();
    expect(!component.isExpanded).toBe(true);
    /* dataServiceMock.navToggle$.subscribe((data) => {
      expect(data).toBe(true);
      
      done();
    }); */

    //expect(dataServiceMock.navToggle$).toHaveBeenCalledTimes(1);
  });

  it('isExpanded should be false after component initialization', () => {
    fixture.detectChanges();
    expect(component.isExpanded).toBeUndefined();
  });

  it('should expand when isExpanded is true', () => {
    const nosilaSidebarDe: DebugElement = fixture.debugElement;
    const sidebarDe: DebugElement = nosilaSidebarDe.query(By.css('aside'));
    const sidebarElement: HTMLElement = sidebarDe.nativeElement;
    component.isExpanded = true;
    fixture.detectChanges();
    expect(sidebarElement).toHaveClass(
      'expanded',
      'does not have "expanded" class'
    );
  });

  it('should collapse when isExpanded is falsy', () => {
    const nosilaSidebarDe: DebugElement = fixture.debugElement;
    const sidebarDe: DebugElement = nosilaSidebarDe.query(By.css('aside'));
    const sidebarElement: HTMLElement = sidebarDe.nativeElement;

    expect(sidebarElement).not.toHaveClass('expanded', 'has "expanded" class');
  });

  it('should toggle dropdown', () => {
    const nosilaSidebarDe: DebugElement = fixture.debugElement;
    const dropdownDe: DebugElement = nosilaSidebarDe.query(
      By.css('.dropdown__icon')
    );
    dropdownDe.triggerEventHandler('click', {});
    fixture.detectChanges();
    const subnavDe = nosilaSidebarDe.query(By.css('.sub-nav__list'));
    const subnavElement = subnavDe.nativeElement;
    expect(subnavElement).toBeDefined();
  });
});
