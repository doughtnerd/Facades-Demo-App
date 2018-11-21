import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { AddTodo } from '../../store/actions/todos.actions';

@Component({
  selector: 'app-todo-add-view',
  templateUrl: './todo-add-view.component.html',
  styleUrls: ['./todo-add-view.component.scss']
})
export class TodoAddViewComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.createTodoForm(new Todo('', ''));
  }

  public createTodoForm(todo: Todo): FormGroup {
    return this.formBuilder.group({
      id: todo.id,
      title: [todo.title, Validators.required],
      description: todo.description,
      complete: todo.complete
    });
  }

  public onSubmit(): void {
    this.store.dispatch(new AddTodo(this.formGroup.value as Todo));
    this.router.navigate(['/todos']);
  }

}
