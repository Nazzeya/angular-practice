import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcntentChildComponent } from './ngcntent-child.component';

describe('NgcntentChildComponent', () => {
  let component: NgcntentChildComponent;
  let fixture: ComponentFixture<NgcntentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcntentChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcntentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
