import { createSelector, defaultMemoize, createFeatureSelector } from '@ngrx/store';
import { TodosFeatureState } from '../reducers/todos.reducer';

export const getTodoState = createFeatureSelector<TodosFeatureState>('Todos');

export const getAllTodos = createSelector(
  getTodoState,
  (state) => state.todos
);

export const getTodosLoaded = createSelector(
  getTodoState,
  (state) => state.loaded
);

export const getTodo = createSelector(
  getTodoState,
  (state, props) => state.todos.filter(item => item.id === props.id)[0]
);
