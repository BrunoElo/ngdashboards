import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosilaHeaderComponent } from './nosila-header.component';

describe('NosilaHeaderComponent', () => {
  let component: NosilaHeaderComponent;
  let fixture: ComponentFixture<NosilaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosilaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosilaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
