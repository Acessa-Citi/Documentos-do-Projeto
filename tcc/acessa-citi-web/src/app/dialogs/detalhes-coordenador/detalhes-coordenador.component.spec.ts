import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCoordenadorComponent } from './detalhes-coordenador.component';

describe('DetalhesCoordenadorComponent', () => {
  let component: DetalhesCoordenadorComponent;
  let fixture: ComponentFixture<DetalhesCoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCoordenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
