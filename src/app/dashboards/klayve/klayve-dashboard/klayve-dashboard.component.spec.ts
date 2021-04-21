import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlayveDashboardComponent } from './klayve-dashboard.component';

describe('KlayveDashboardComponent', () => {
  let component: KlayveDashboardComponent;
  let fixture: ComponentFixture<KlayveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlayveDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlayveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
