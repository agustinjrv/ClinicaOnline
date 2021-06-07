import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallesComponent } from './modal-detalles.component';

describe('ModalDetallesComponent', () => {
  let component: ModalDetallesComponent;
  let fixture: ComponentFixture<ModalDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
