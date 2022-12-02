import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRootComponent } from './http-root.component';

describe('HttpRootComponent', () => {
  let component: HttpRootComponent;
  let fixture: ComponentFixture<HttpRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
