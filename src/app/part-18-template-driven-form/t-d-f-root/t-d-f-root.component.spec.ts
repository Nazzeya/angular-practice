import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFRootComponent } from './t-d-f-root.component';

describe('TDFRootComponent', () => {
  let component: TDFRootComponent;
  let fixture: ComponentFixture<TDFRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDFRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
