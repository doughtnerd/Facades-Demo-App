import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  TodosActionTypes,
  AddTodo,
  AddTodoSuccess,
  AddTodoFailure,
  RemoveTodoSuccess,
  RemoveTodoFailure,
  EditTodo,
  EditTodoSuccess,
  EditTodoFailure,
  LoadTodosSuccess,
  LoadTodosFailure
} from '../actions/todos.actions';
import { TodosHttpService } from '../../services/todos-http.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Todo } from '../../models/todo.model';
import { of } from 'rxjs';

@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodosHttpService
  ) { }

  @Effect()
  addTodo$ = this.actions$
    .ofType(TodosActionTypes.AddTodo)
    .pipe(
      map((action: AddTodo) => action.payload),
      mergeMap((todo: Todo) => {
        return this.todoService.makeAddTodoRequest(todo).pipe(
          map(response => new AddTodoSuccess(response)),
          catchError(error =>
            of(new AddTodoFailure(error))
          )
        );
      })
    );

  @Effect()
  removeTodo$ = this.actions$
    .ofType(TodosActionTypes.RemoveTodo)
    .pipe(
      map((action: AddTodo) => action.payload),
      mergeMap((todo: Todo) => {
        return this.todoService.makeRemoveTodoRequest(todo).pipe(
          map(response => new RemoveTodoSuccess(response)),
          catchError(error => of(new RemoveTodoFailure(error)))
        );
      })
    );

  @Effect()
  editTodo$ = this.actions$
    .ofType(TodosActionTypes.EditTodo)
    .pipe(
      map((action: EditTodo) => action.payload),
      mergeMap((todo: Todo) => {
        return this.todoService.makeEditTodoRequest(todo).pipe(
          map(response => new EditTodoSuccess(response)),
          catchError(error => of(new EditTodoFailure(error)))
        );
      })
    );

  @Effect()
  getTodos$ = this.actions$
    .ofType(TodosActionTypes.LoadTodos)
    .pipe(
      switchMap(() => {
        return this.todoService.makeGetTodosRequest().pipe(
          map((data: Todo[]) => new LoadTodosSuccess(data)),
          catchError(err => of(new LoadTodosFailure(err)))
        );
      })
    );
}
