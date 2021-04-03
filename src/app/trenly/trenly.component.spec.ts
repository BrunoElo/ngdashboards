import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenlyComponent } from './trenly.component';

describe('TrenlyComponent', () => {
  let component: TrenlyComponent;
  let fixture: ComponentFixture<TrenlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
