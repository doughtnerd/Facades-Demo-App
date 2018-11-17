import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum TodosActionTypes {
  LoadTodos = '[Todos] Load Todos',
  LoadTodosSuccess = '[Todos] Load Todos Success',
  LoadTodosFailure = '[Todos] Load Todos Failure',
  AddTodo = '[Todos] Add Todo',
  AddTodoSuccess = '[Todos] Add Todo Success',
  AddTodoFailure = '[Todos] Add Todo Failure',
  RemoveTodo = '[Todos] Remove Todo',
  RemoveTodoSuccess = '[Todos] Remove Todo Success',
  RemoveTodoFailure = '[Todos] Remove Todo Failure',
  EditTodo = '[Todos] Edit Todo',
  EditTodoSuccess = '[Todos] Edit Todo Success',
  EditTodoFailure = '[Todos] Edit Todo Failure'
}

export class LoadTodos implements Action {
  readonly type = TodosActionTypes.LoadTodos;
}
export class LoadTodosSuccess implements Action {
  readonly type = TodosActionTypes.LoadTodosSuccess;
  constructor(public payload: Todo[]) { }
}
export class LoadTodosFailure implements Action {
  readonly type = TodosActionTypes.LoadTodosFailure;
  constructor(public payload: any) { }
}

export class AddTodo implements Action {
  readonly type = TodosActionTypes.AddTodo;
  constructor(public payload: Todo) { }
}
export class AddTodoSuccess implements Action {
  readonly type = TodosActionTypes.AddTodoSuccess;
  constructor(public payload: Todo) { }
}
export class AddTodoFailure implements Action {
  readonly type = TodosActionTypes.AddTodoFailure;
  constructor(public payload: Error) { }
}


export class RemoveTodo implements Action {
  readonly type = TodosActionTypes.RemoveTodo;
  constructor(public payload: Todo) { }
}
export class RemoveTodoSuccess implements Action {
  readonly type = TodosActionTypes.RemoveTodoSuccess;
  constructor(public payload: Todo) { }
}
export class RemoveTodoFailure implements Action {
  readonly type = TodosActionTypes.RemoveTodoFailure;
  constructor(public payload: Error) { }
}


export class EditTodo implements Action {
  readonly type = TodosActionTypes.EditTodo;
  constructor(public payload: Todo) { }
}
export class EditTodoSuccess implements Action {
  readonly type = TodosActionTypes.EditTodoSuccess;
  constructor(public payload: Todo) { }
}
export class EditTodoFailure implements Action {
  readonly type = TodosActionTypes.EditTodoFailure;
  constructor(public payload: Error) { }
}

export type TodosActions =
  LoadTodos |
  LoadTodosSuccess |
  LoadTodosFailure |
  AddTodo |
  AddTodoSuccess |
  AddTodoFailure |
  RemoveTodo |
  RemoveTodoSuccess |
  RemoveTodoFailure |
  EditTodo |
  EditTodoSuccess |
  EditTodoFailure;
