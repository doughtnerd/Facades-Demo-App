import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class TodoResolver implements Resolve<Todo> {

  constructor(private todosService: TodosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> {
    const id = route.params.id;
    return this.todosService.todos$.pipe(
      map(todos => {
        const found = todos.filter(item => item.id === id)[0];
        if (!found) {
          return null;
        }
        return found;
      }),
      first()
    );
  }
}
