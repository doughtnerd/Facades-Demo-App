import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddViewComponent } from './todo-add-view.component';

describe('TodoAddViewComponent', () => {
  let component: TodoAddViewComponent;
  let fixture: ComponentFixture<TodoAddViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAddViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
