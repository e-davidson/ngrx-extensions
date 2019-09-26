import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSpinnerComponent } from './sample-spinner.component';

describe('SampleSpinnerComponent', () => {
  let component: SampleSpinnerComponent;
  let fixture: ComponentFixture<SampleSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
