import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVRootComponent } from './t-v-root.component';

describe('TVRootComponent', () => {
  let component: TVRootComponent;
  let fixture: ComponentFixture<TVRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
