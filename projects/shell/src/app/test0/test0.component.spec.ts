import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test0Component } from './test0.component';

describe('Test0Component', () => {
  let component: Test0Component;
  let fixture: ComponentFixture<Test0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
