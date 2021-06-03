import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEspecialidadesTurnosComponent } from './tabla-especialidades.component';

describe('TablaEspecialidadesTurnosComponent', () => {
  let component: TablaEspecialidadesTurnosComponent;
  let fixture: ComponentFixture<TablaEspecialidadesTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEspecialidadesTurnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEspecialidadesTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
