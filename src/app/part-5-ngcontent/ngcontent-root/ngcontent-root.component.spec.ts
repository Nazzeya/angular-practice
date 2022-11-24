import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentRootComponent } from './ngcontent-root.component';

describe('NgcontentRootComponent', () => {
  let component: NgcontentRootComponent;
  let fixture: ComponentFixture<NgcontentRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcontentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
