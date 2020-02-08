import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarDenunciaComponent } from './aprovar-denuncia.component';

describe('AprovarDenunciaComponent', () => {
  let component: AprovarDenunciaComponent;
  let fixture: ComponentFixture<AprovarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
