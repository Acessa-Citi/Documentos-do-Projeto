import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCidadaoComponent } from './detalhes-cidadao.component';

describe('DetalhesCidadaoComponent', () => {
  let component: DetalhesCidadaoComponent;
  let fixture: ComponentFixture<DetalhesCidadaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCidadaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCidadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
