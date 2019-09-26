import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionStateSpinnerComponent } from './action-state-spinner.component';

describe('ActionStateSpinnerComponent', () => {
  let component: ActionStateSpinnerComponent;
  let fixture: ComponentFixture<ActionStateSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionStateSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionStateSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
