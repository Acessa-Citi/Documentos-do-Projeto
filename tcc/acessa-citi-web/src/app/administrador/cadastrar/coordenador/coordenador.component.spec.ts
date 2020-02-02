import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorComponent } from './coordenador.component';

describe('CoordenadorComponent', () => {
  let component: CoordenadorComponent;
  let fixture: ComponentFixture<CoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
