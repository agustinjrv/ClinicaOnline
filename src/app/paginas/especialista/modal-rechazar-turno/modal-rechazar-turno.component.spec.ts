import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRechazarTurnoComponent } from './modal-rechazar-turno.component';

describe('ModalRechazarTurnoComponent', () => {
  let component: ModalRechazarTurnoComponent;
  let fixture: ComponentFixture<ModalRechazarTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRechazarTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRechazarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
