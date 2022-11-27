import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADRootComponent } from './a-d-root.component';

describe('ADRootComponent', () => {
  let component: ADRootComponent;
  let fixture: ComponentFixture<ADRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
