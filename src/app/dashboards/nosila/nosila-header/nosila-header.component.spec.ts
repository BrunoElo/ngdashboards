import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BadgeModule } from 'primeng/badge';
import { DataService } from 'src/app/services/data.service';

import { NosilaHeaderComponent } from './nosila-header.component';

describe('NosilaHeaderComponent', () => {
  let component: NosilaHeaderComponent;
  let fixture: ComponentFixture<NosilaHeaderComponent>;
  let sendNavStateSpy;

  beforeEach(async () => {
    // Create a fake DataService object with a `sendNavState()` spy
    const dataService = jasmine.createSpyObj('DataService', ['sendNavState']);

    // Make the spy
    sendNavStateSpy = dataService.sendNavState;

    await TestBed.configureTestingModule({
      imports: [BadgeModule],
      declarations: [NosilaHeaderComponent],
      providers: [{ provide: DataService, useValue: dataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NosilaHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have undefined collapsed property after initialisation', () => {
    component.ngOnInit;
    expect(component.isCollapsed).toBeUndefined('not undefined');
  });

  it('header should have no class(header should be expanded) by default', () => {
    const nosilaHeaderDe: DebugElement = fixture.debugElement;
    const headerDe = nosilaHeaderDe.query(By.css('header'));
    const headerElement: HTMLElement = headerDe.nativeElement;
    expect(headerElement).not.toHaveClass('collapsed', 'has a collapsed class');
  });

  it('header should have "collapsed" class after menu toggler is clicked', () => {
    const nosilaHeaderDe: DebugElement = fixture.debugElement;
    const menuDe = nosilaHeaderDe.query(By.css('.menu__icon'));
    menuDe.triggerEventHandler('click', {});
    fixture.detectChanges();
    const headerDe = nosilaHeaderDe.query(By.css('header'));
    const headerElement: HTMLElement = headerDe.nativeElement;
    expect(headerElement).toHaveClass('collapsed', 'has no "collapsed" class');
  });

  it('should send the nav state when menu toggler is clicked', () => {
    const nosilaHeaderDe: DebugElement = fixture.debugElement;
    const menuDe = nosilaHeaderDe.query(By.css('.menu__icon'));
    //const menuButton: HTMLButtonElement = menuDe.nativeElement;
    //const menuElement: SVGSVGElement = menuDe.nativeElement;
    //console.log(menuButton);
    menuDe.triggerEventHandler('click', {});
    //menuButton.click();
    fixture.detectChanges();
    expect(sendNavStateSpy).toHaveBeenCalledTimes(1);
  });
});
