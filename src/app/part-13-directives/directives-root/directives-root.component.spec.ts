import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesRootComponent } from './directives-root.component';

describe('DirectivesRootComponent', () => {
  let component: DirectivesRootComponent;
  let fixture: ComponentFixture<DirectivesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
