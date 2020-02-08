import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPrefeituraComponent } from './detalhes-prefeitura.component';

describe('DetalhesPrefeituraComponent', () => {
  let component: DetalhesPrefeituraComponent;
  let fixture: ComponentFixture<DetalhesPrefeituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPrefeituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPrefeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
