import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRoutingComponentComponent } from './second-routing-component.component';

describe('SecondRoutingComponentComponent', () => {
  let component: SecondRoutingComponentComponent;
  let fixture: ComponentFixture<SecondRoutingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRoutingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondRoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
