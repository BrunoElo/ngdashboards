import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosilaDashboardComponent } from './nosila-dashboard.component';

describe('NosilaDashboardComponent', () => {
  let component: NosilaDashboardComponent;
  let fixture: ComponentFixture<NosilaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosilaDashboardComponent ]
    })
    .compileComponents();
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
