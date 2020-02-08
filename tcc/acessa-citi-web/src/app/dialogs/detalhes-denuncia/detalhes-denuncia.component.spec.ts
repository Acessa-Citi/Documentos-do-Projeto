import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDenunciaComponent } from './detalhes-denuncia.component';

describe('DetalhesDenunciaComponent', () => {
  let component: DetalhesDenunciaComponent;
  let fixture: ComponentFixture<DetalhesDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
