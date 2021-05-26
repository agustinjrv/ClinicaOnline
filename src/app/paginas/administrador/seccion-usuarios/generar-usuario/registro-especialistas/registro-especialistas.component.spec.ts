import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEspecialistasComponent } from './registro-especialistas.component';

describe('RegistroEspecialistasComponent', () => {
  let component: RegistroEspecialistasComponent;
  let fixture: ComponentFixture<RegistroEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEspecialistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
