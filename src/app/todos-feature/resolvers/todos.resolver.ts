import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Todo } from '../models/todo.model';
import { first } from 'rxjs/operators';
import { TodosService } from '../services/todos-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class TodosLoader implements Resolve<Todo[]> {

  constructor(private todosService: TodosService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.todosService.loadTodos().pipe(first());
  }
}
