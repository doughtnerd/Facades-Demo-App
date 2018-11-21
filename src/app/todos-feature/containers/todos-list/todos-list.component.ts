import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { getAllTodos, getTodosLoaded, getTodo } from '../../store/selectors/todo.selector';
import { Observable } from 'rxjs';
import { RemoveTodo, EditTodo, LoadTodos } from '../../store/actions/todos.actions';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  public todos$: Observable<Todo[]>;

  constructor(private store: Store<any>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todos$ = this.store.select(getTodosLoaded).pipe(
      switchMap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadTodos());
          return this.store.select(getTodosLoaded).pipe(
            switchMap(() => this.store.select(getAllTodos))
          );
        }
        return this.store.select(getAllTodos);
      })
    );
  }

  public onEditTodo(todo: Todo) {
    this.router.navigate([todo.id], { relativeTo: this.route });
  }

  public onAddTodo() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  public removeTodo(todo: Todo) {
    this.store.dispatch(new RemoveTodo(todo));
  }

  public toggleTodoCompletionStatus(todo: Todo) {
    this.store.dispatch(new EditTodo({ ...todo, complete: !todo.complete }));
  }

}
