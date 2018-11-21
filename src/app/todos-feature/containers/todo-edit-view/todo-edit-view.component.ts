import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getAllTodos } from '../../store/selectors/todo.selector';
import { map } from 'rxjs/operators';
import { Todo } from '../../models/todo.model';
import { EditTodo } from '../../store/actions/todos.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.scss']
})
export class TodoEditViewComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;

  private onDestroy$: Subscription;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.onDestroy$ = this.store.select(getAllTodos).pipe(
      map(todos => todos.filter(item => item.id === this.activatedRoute.snapshot.params.id)[0]),
    ).subscribe((todo: Todo) => {
      this.formGroup = this.createTodoForm(todo);
    });
  }

  ngOnDestroy() {
    if (this.onDestroy$) {
      this.onDestroy$.unsubscribe();
    }
  }

  public createTodoForm(todo: Todo): FormGroup {
    return this.formBuilder.group({
      id: todo.id,
      title: [todo.title, Validators.required],
      description: todo.description,
      complete: todo.complete
    });
  }

  public onSubmit(): void {
    this.store.dispatch(new EditTodo(this.formGroup.value as Todo));
    this.router.navigate(['/todos']);
  }
}
