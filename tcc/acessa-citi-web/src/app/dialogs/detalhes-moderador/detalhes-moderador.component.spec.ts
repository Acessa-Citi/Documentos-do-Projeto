import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesModeradorComponent } from './detalhes-moderador.component';

describe('DetalhesModeradorComponent', () => {
  let component: DetalhesModeradorComponent;
  let fixture: ComponentFixture<DetalhesModeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesModeradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
