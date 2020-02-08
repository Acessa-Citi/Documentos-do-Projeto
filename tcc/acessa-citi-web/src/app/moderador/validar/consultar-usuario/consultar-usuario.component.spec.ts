import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUsuarioComponent } from './consultar-usuario.component';

describe('ConsultarUsuarioComponent', () => {
  let component: ConsultarUsuarioComponent;
  let fixture: ComponentFixture<ConsultarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
