import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTurnosDiasComponent } from './grafico-turnos-dias.component';

describe('GraficoTurnosDiasComponent', () => {
  let component: GraficoTurnosDiasComponent;
  let fixture: ComponentFixture<GraficoTurnosDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTurnosDiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoTurnosDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
