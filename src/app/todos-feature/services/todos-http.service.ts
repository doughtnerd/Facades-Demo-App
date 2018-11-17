import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { map, delay, tap } from 'rxjs/operators';
import * as uuidV1 from 'uuid/v1';
import { LocalStorage } from 'src/app/utility/local-storage';
import { Observable, of } from 'rxjs';

@Injectable()
export class TodosHttpService {

  private localStorage: LocalStorage<Todo> = new LocalStorage('Todos');

  constructor() { }

  public makeAddTodoRequest(todo: Todo): Observable<Todo> {
    return of(todo).pipe(
      map(item => {
        return {
          ...item,
          id: uuidV1()
        };
      }),
      delay(250),
      tap(data => {
        this.localStorage.saveItemToLocalStorage(data);
      }),
      delay(250)
    );
  }

  public makeRemoveTodoRequest(todo: Todo): Observable<Todo> {
    return of(todo).pipe(
      delay(500),
      tap(data => {
        this.localStorage.removeFromLocalStorage(data, (item: Todo) => item.id !== data.id);
      }),
      delay(500)
    );
  }

  public makeEditTodoRequest(todo: Todo): Observable<Todo> {
    return of(todo).pipe(
      delay(300),
      tap(data => this.localStorage.replaceItemInLocalStorage(data, (item: Todo) => item.id === data.id)),
      delay(300)
    );
  }

  public makeGetTodosRequest(): Observable<Todo[]> {
    return of(null).pipe(
      delay(2000),
      map(() => this.localStorage.getFromLocalStorage() || []),
      tap(data => console.log('Loaded From Local Storage: ', data))
    );
  }

}
