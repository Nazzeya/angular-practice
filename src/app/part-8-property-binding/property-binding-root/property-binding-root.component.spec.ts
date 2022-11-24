import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingRootComponent } from './property-binding-root.component';

describe('PropertyBindingRootComponent', () => {
  let component: PropertyBindingRootComponent;
  let fixture: ComponentFixture<PropertyBindingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
