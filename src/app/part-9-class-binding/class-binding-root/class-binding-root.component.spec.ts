import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingRootComponent } from './class-binding-root.component';

describe('ClassBindingRootComponent', () => {
  let component: ClassBindingRootComponent;
  let fixture: ComponentFixture<ClassBindingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBindingRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBindingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
