import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocreditComponent } from './autocredit.component';

describe('AutocreditComponent', () => {
  let component: AutocreditComponent;
  let fixture: ComponentFixture<AutocreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
