import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesRootComponent } from './pipes-root.component';

describe('PipesRootComponent', () => {
  let component: PipesRootComponent;
  let fixture: ComponentFixture<PipesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
