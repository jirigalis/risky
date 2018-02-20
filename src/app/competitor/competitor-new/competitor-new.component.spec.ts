import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorNewComponent } from './competitor-new.component';

describe('CompetitorNewComponent', () => {
  let component: CompetitorNewComponent;
  let fixture: ComponentFixture<CompetitorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
