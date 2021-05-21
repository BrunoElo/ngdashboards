import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

import { NosilaDashboardComponent } from './nosila-dashboard.component';

fdescribe('NosilaDashboardComponent', () => {
  let component: NosilaDashboardComponent;
  let fixture: ComponentFixture<NosilaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarModule, FormsModule, BrowserAnimationsModule],
      declarations: [NosilaDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosilaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
