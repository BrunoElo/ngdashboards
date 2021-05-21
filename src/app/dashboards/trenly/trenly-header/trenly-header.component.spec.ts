import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenlyHeaderComponent } from './trenly-header.component';

describe('NosilaHeaderComponent', () => {
  let component: TrenlyHeaderComponent;
  let fixture: ComponentFixture<TrenlyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrenlyHeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TrenlyHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header expanded initally', () => {
    expect(component.adjustWidth).toBeUndefined();
  });
});
