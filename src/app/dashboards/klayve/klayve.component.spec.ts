import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlayveComponent } from './klayve.component';

describe('KlayveComponent', () => {
  let component: KlayveComponent;
  let fixture: ComponentFixture<KlayveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlayveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlayveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
