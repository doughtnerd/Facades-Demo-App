import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos-service.service';

@Component({
  selector: 'app-todo-item-view',
  templateUrl: './todo-item-view.component.html',
  styleUrls: ['./todo-item-view.component.scss']
})
export class TodoItemViewComponent implements OnInit {

  public formGroup: FormGroup;

  public isEditMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private todosService: TodosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isEditMode = this.activatedRoute.snapshot.data.isEditMode;
    const todo: Todo = this.activatedRoute.snapshot.data.todo;

    this.formGroup = this.formBuilder.group({
      id: todo.id,
      title: [todo.title, Validators.required],
      description: todo.description,
      complete: todo.complete
    });
  }

  public onSubmit(): void {
    if (this.isEditMode) {
      this.todosService.editTodo(this.formGroup.value as Todo);
    } else {
      this.todosService.addTodo(this.formGroup.value as Todo);
    }

    this.router.navigate(['/todos']);
  }

  public get title(): string {
    return this.isEditMode ? 'Edit Todo' : 'Add Todo';
  }

}
