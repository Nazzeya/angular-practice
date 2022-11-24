import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStatementsRootComponent } from './template-statements-root.component';

describe('TemplateStatementsRootComponent', () => {
  let component: TemplateStatementsRootComponent;
  let fixture: ComponentFixture<TemplateStatementsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStatementsRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateStatementsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
