import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingRootComponent } from './event-binding-root.component';

describe('EventBindingRootComponent', () => {
  let component: EventBindingRootComponent;
  let fixture: ComponentFixture<EventBindingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
