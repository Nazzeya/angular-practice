import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRoutingComponentComponent } from './first-routing-component.component';

describe('FirstRoutingComponentComponent', () => {
  let component: FirstRoutingComponentComponent;
  let fixture: ComponentFixture<FirstRoutingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstRoutingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstRoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
