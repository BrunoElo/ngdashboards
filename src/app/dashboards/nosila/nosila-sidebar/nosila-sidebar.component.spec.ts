import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosilaSidebarComponent } from './nosila-sidebar.component';

describe('NosilaSidebarComponent', () => {
  let component: NosilaSidebarComponent;
  let fixture: ComponentFixture<NosilaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosilaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosilaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
