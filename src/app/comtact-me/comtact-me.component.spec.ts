import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtactMeComponent } from './comtact-me.component';

describe('ComtactMeComponent', () => {
  let component: ComtactMeComponent;
  let fixture: ComponentFixture<ComtactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComtactMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
