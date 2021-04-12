import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlayveSidebarComponent } from './klayve-sidebar.component';

describe('KlayveSidebarComponent', () => {
  let component: KlayveSidebarComponent;
  let fixture: ComponentFixture<KlayveSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlayveSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlayveSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
