import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiRootComponent } from './di-root.component';

describe('DiRootComponent', () => {
  let component: DiRootComponent;
  let fixture: ComponentFixture<DiRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
