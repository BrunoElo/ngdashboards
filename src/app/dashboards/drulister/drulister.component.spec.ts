import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrulisterComponent } from './drulister.component';

describe('DrulisterComponent', () => {
  let component: DrulisterComponent;
  let fixture: ComponentFixture<DrulisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrulisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrulisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
