import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayRootComponent } from './two-way-root.component';

describe('TwoWayRootComponent', () => {
  let component: TwoWayRootComponent;
  let fixture: ComponentFixture<TwoWayRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
