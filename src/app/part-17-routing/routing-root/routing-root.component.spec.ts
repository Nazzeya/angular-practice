import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingRootComponent } from './routing-root.component';

describe('RoutingRootComponent', () => {
  let component: RoutingRootComponent;
  let fixture: ComponentFixture<RoutingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
