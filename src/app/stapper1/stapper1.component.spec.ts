import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stapper1Component } from './stapper1.component';

describe('Stapper1Component', () => {
  let component: Stapper1Component;
  let fixture: ComponentFixture<Stapper1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stapper1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stapper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
