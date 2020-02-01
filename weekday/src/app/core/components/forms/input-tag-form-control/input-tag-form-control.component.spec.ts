import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTagFormControlComponent } from './input-tag-form-control.component';

describe('InputTagFormControlComponent', () => {
  let component: InputTagFormControlComponent;
  let fixture: ComponentFixture<InputTagFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTagFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTagFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
