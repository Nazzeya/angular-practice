import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFRootComponent } from './r-f-root.component';

describe('RFRootComponent', () => {
  let component: RFRootComponent;
  let fixture: ComponentFixture<RFRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RFRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
