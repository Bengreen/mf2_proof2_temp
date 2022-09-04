import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenViewComponent } from './ben-view.component';

describe('BenViewComponent', () => {
  let component: BenViewComponent;
  let fixture: ComponentFixture<BenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
