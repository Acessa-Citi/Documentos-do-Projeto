import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarDenunciaComponent } from './validar-denuncia.component';

describe('ValidarDenunciaComponent', () => {
  let component: ValidarDenunciaComponent;
  let fixture: ComponentFixture<ValidarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
