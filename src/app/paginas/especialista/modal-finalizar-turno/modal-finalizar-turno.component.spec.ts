import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFinalizarTurnoComponent } from './modal-finalizar-turno.component';

describe('ModalFinalizarTurnoComponent', () => {
  let component: ModalFinalizarTurnoComponent;
  let fixture: ComponentFixture<ModalFinalizarTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFinalizarTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFinalizarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
