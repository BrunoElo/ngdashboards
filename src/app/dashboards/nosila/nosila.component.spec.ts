import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosilaComponent } from './nosila.component';

describe('NosilaComponent', () => {
  let component: NosilaComponent;
  let fixture: ComponentFixture<NosilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
