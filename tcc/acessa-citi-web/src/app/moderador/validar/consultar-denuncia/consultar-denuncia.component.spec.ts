import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDenunciaComponent } from './consultar-denuncia.component';

describe('ConsultarDenunciaComponent', () => {
  let component: ConsultarDenunciaComponent;
  let fixture: ComponentFixture<ConsultarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
