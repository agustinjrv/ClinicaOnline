import { TestBed } from '@angular/core/testing';

import { EsPacienteGuard } from './es-paciente.guard';

describe('EsPacienteGuard', () => {
  let guard: EsPacienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EsPacienteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
