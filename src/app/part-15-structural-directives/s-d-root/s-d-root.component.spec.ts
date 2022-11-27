import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDRootComponent } from './s-d-root.component';

describe('SDRootComponent', () => {
  let component: SDRootComponent;
  let fixture: ComponentFixture<SDRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
