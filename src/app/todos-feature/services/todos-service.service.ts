import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { filter, switchMap } from 'rxjs/operators';
import { AddTodo, EditTodo, RemoveTodo, LoadTodos } from '../store/actions/todos.actions';
import { ITodoService } from '../interfaces/todo-service.interface';
import { getAllTodos, getTodosLoaded } from '../store/selectors/todo.selector';

@Injectable()
export class TodosService implements ITodoService {

  constructor(private store: Store<any>) { }

  public get todos$(): Observable<Todo[]> {
    return this.store.select(getAllTodos);
  }

  public loadTodos(): Observable<Todo[]> {
    this.store.dispatch(new LoadTodos());
    return this.store.select(getTodosLoaded).pipe(
      filter(loaded => loaded),
      switchMap(() => {
        return this.todos$;
      })
    );
  }

  public addTodo(todo: Todo) {
    this.store.dispatch(new AddTodo(todo));
  }

  public editTodo(todo: Todo) {
    this.store.dispatch(new EditTodo(todo));
  }

  public toggleTodoCompletionStatus(todo: Todo) {
    this.store.dispatch(new EditTodo({ ...todo, complete: !todo.complete }));
  }

  public removeTodo(todo: Todo) {
    this.store.dispatch(new RemoveTodo(todo));
  }

}
