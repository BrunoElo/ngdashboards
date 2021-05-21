import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenlySidebarComponent } from './trenly-sidebar.component';

describe('TrenlySidebarComponent', () => {
  let component: TrenlySidebarComponent;
  let fixture: ComponentFixture<TrenlySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrenlySidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenlySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
