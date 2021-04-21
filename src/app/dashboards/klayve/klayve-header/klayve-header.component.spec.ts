import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlayveHeaderComponent } from './klayve-header.component';

describe('KlayveHeaderComponent', () => {
  let component: KlayveHeaderComponent;
  let fixture: ComponentFixture<KlayveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlayveHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlayveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
