import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEspecialidadesComponent } from './tabla-especialidades.component';

describe('TablaEspecialidadesComponent', () => {
  let component: TablaEspecialidadesComponent;
  let fixture: ComponentFixture<TablaEspecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEspecialidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
