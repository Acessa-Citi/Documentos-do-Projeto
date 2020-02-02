import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeradorComponent } from './moderador.component';

describe('ModeradorComponent', () => {
  let component: ModeradorComponent;
  let fixture: ComponentFixture<ModeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
