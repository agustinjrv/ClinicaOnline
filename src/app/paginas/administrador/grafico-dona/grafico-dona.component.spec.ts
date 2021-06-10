import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDonaComponent } from './grafico-dona.component';

describe('GraficoDonaComponent', () => {
  let component: GraficoDonaComponent;
  let fixture: ComponentFixture<GraficoDonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
