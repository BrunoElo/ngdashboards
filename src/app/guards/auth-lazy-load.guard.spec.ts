import { TestBed } from '@angular/core/testing';

import { AuthLazyLoadGuard } from './auth-lazy-load.guard';

describe('AuthLazyLoadGuard', () => {
  let guard: AuthLazyLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLazyLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
