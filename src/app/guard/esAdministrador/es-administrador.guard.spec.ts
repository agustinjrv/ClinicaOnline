import { TestBed } from '@angular/core/testing';

import { EsAdministradorGuard } from './es-administrador.guard';

describe('EsAdministradorGuard', () => {
  let guard: EsAdministradorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EsAdministradorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
