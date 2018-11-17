import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

export interface ITodoService {

  /**
   * An observable of all todos in the app.
   */
  todos$: Observable<Todo[]>;

  /**
   * Makes a request to save the given todo to the backend.
   * Once complete, updates todos$.
   *
   * @param todo The todo to add.
   */
  addTodo(todo: Todo);

  /**
   * Makes a request to update an existing todo.
   * Once complete, updates todos$.
   *
   * @param todo The updated version of the todo to use.
   */
  editTodo(todo: Todo);

  /**
   * Toggles the complete status of the given todo and updates the matching todo.
   * If complete == true, sets to false.
   * If complete == false, sets to true.
   *
   * Then makes a request to update the todo on the backend.
   * Once complete, updates todos$.
   *
   * @param todo The todo to toggle.
   */
  toggleTodoCompletionStatus(todo: Todo);

  /**
   * Makes a request to remove an existing todo from the backend.
   * Once complete, updates todos$.
   *
   * @param todo The todo to remove.
   */
  removeTodo(todo: Todo);

  /**
   * Loads todos from the backend and returns an observable for the request.
   * When complete, updates todos$
   */
  loadTodos(): Observable<Todo[]>;
}
