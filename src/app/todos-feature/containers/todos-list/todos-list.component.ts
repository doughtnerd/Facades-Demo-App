import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {

  constructor(public todoService: TodosService, private router: Router, private route: ActivatedRoute) { }

  public onEditTodo(todo: Todo) {
    this.router.navigate([todo.id], { relativeTo: this.route });
  }

  public onAddTodo() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
