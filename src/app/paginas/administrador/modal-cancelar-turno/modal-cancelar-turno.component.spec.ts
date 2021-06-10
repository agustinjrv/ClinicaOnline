import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelarTurnoComponent } from './modal-cancelar-turno.component';

describe('ModalCancelarTurnoComponent', () => {
  let component: ModalCancelarTurnoComponent;
  let fixture: ComponentFixture<ModalCancelarTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCancelarTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCancelarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
