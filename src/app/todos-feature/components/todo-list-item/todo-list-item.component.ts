import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() public item: Todo;

  @Output() public deleteEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() public editEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() public checkboxEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  public deleteClicked() {
    this.deleteEvent.next(this.item);
  }

  public editClicked() {
    this.editEvent.next(this.item);
  }

  public checkboxClicked() {
    this.checkboxEvent.next(this.item);
  }

}
