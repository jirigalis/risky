import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorFormComponent } from './competitor-form.component';

describe('CompetitorFormComponent', () => {
  let component: CompetitorFormComponent;
  let fixture: ComponentFixture<CompetitorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
