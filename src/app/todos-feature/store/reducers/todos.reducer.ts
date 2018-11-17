import { Action } from '@ngrx/store';
import { TodosActions, TodosActionTypes, AddTodo } from '../actions/todos.actions';
import { Todo } from '../../models/todo.model';

export interface TodosFeatureState {
  todos: Todo[];
  loaded: boolean;
  loading: boolean;
  saved: boolean;
  error: any;
}

export const initialState: TodosFeatureState = {
  todos: [],
  loaded: false,
  loading: false,
  saved: false,
  error: null
};

export function reducer(state = initialState, action: TodosActions): TodosFeatureState {
  switch (action.type) {

    case TodosActionTypes.LoadTodos:
      return {
        ...state,
        loaded: false,
        loading: true,
        saved: false
      };
    case TodosActionTypes.LoadTodosSuccess:
      return {
        todos: action.payload,
        loaded: true,
        loading: false,
        saved: false,
        error: null
      };
    case TodosActionTypes.LoadTodosFailure:
      return {
        ...state,
        loaded: false,
        loading: false,
        saved: false,
        error: action.payload
      };

    case TodosActionTypes.AddTodo:
      return {
        ...state,
        loaded: false,
        loading: true,
        saved: false
      };
    case TodosActionTypes.AddTodoSuccess:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loaded: false,
        loading: false,
        saved: true,
        error: null
      };
    case TodosActionTypes.AddTodoFailure:
      return {
        ...state,
        loaded: false,
        loading: false,
        saved: false,
        error: action.payload
      };

    case TodosActionTypes.RemoveTodo:
      return {
        ...state,
        loaded: false,
        loading: true,
        saved: false,
      };
    case TodosActionTypes.RemoveTodoSuccess:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        loaded: false,
        loading: false,
        saved: true,
        error: null
      };

    case TodosActionTypes.EditTodo:
      return {
        ...state,
        loading: true,
        loaded: false,
        saved: false
      };
    case TodosActionTypes.EditTodoSuccess:
      return {
        todos: state.todos.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
        loaded: true,
        saved: true,
        loading: false,
        error: null
      };

    case TodosActionTypes.EditTodoFailure:
      return {
        ...state,
        loading: false,
        loaded: true,
        saved: false,
        error: action.payload
      };

    default:
      return state;
  }
}
