import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValRootComponent } from './form-val-root.component';

describe('FormValRootComponent', () => {
  let component: FormValRootComponent;
  let fixture: ComponentFixture<FormValRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
