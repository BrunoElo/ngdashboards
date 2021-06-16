import { DebugElement, Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

import { NosilaDashboardComponent } from './nosila-dashboard.component';

let renderer: Renderer2;

fdescribe('NosilaDashboardComponent', () => {
  let component: NosilaDashboardComponent;
  let fixture: ComponentFixture<NosilaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarModule, FormsModule, NoopAnimationsModule],
      declarations: [NosilaDashboardComponent],
      providers: [Renderer2],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosilaDashboardComponent);
    component = fixture.componentInstance;
    renderer = fixture.componentRef.injector.get<Renderer2>(
      Renderer2 as Type<Renderer2>
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test if @viewChild targets the right DOM element
  it('should target the element that renders revenue chart', () => {
    const nosilaDashboardDe: DebugElement = fixture.debugElement;
    const revenueCanvasDe: DebugElement = nosilaDashboardDe.query(
      By.css('#revenue__chart')
    );
    const revenueCanvasEl: HTMLCanvasElement = revenueCanvasDe.nativeElement;
    // using renderer to interact safely with DOM
    // call through calls real method
    spyOn(renderer, 'selectRootElement').and.callThrough();
    expect(
      renderer.selectRootElement(component.revchart).nativeElement
    ).toEqual(revenueCanvasEl);
  });

  // test if the visitors chart initializer function is called once after ngOnInit() or fixture.detectChanges();
  it('should call initializeVisitorsChart method once', () => {
    spyOn(component, 'initializeVisitorsChart');
    component.ngOnInit();
    expect(component.initializeVisitorsChart).toHaveBeenCalledTimes(1);
  });

  // test if the revenue chart initializer is called once with a parameter during ngAfterViewInit()
  it('should call initializeRevenueChart method once', () => {
    // Arrange
    spyOn(component, 'initializeRevenueChart');
    const mockParam: CanvasGradient = component.revChartContext.createLinearGradient(
      0,
      0,
      0,
      500
    );
    mockParam.addColorStop(0, 'rgba(116, 89, 217, 0.4)');
    // Act
    component.ngAfterViewInit();
    // Assert
    expect(component.initializeRevenueChart).toHaveBeenCalledOnceWith(
      mockParam
    );
  });

  it('Should have 5 items in the schedule list', () => {
    const nosilaDashboardDe: DebugElement = fixture.debugElement;
    const scheduleListDe: DebugElement[] = nosilaDashboardDe.queryAll(
      By.css('.schedule__item')
    );
    expect(scheduleListDe.length).toBe(5);
  });

  it('Should have 5 items in the schedule list', () => {
    const nosilaDashboardDe: DebugElement = fixture.debugElement;
    const tableRowDe: DebugElement[] = nosilaDashboardDe.queryAll(
      By.css('.course__status-row')
    );
    expect(tableRowDe.length).toBe(5);
  });
});
