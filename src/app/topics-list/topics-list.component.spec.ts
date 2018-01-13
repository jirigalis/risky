import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsListComponentComponent } from './topics-list-component.component';

describe('TopicsListComponentComponent', () => {
  let component: TopicsListComponentComponent;
  let fixture: ComponentFixture<TopicsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
