import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoEspecialistasComponent } from './registo-especialistas.component';

describe('RegistoEspecialistasComponent', () => {
  let component: RegistoEspecialistasComponent;
  let fixture: ComponentFixture<RegistoEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistoEspecialistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
