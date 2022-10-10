import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3sampleComponent } from './d3sample.component';

describe('D3sampleComponent', () => {
  let component: D3sampleComponent;
  let fixture: ComponentFixture<D3sampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3sampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3sampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
