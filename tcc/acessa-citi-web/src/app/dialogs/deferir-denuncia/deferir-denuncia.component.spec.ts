import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferirDenunciaComponent } from './deferir-denuncia.component';

describe('DeferirDenunciaComponent', () => {
  let component: DeferirDenunciaComponent;
  let fixture: ComponentFixture<DeferirDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeferirDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferirDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
