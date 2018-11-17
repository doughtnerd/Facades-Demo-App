import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TodosListComponent } from './containers/todos-list/todos-list.component';
import { TodoItemViewComponent } from './containers/todo-item-view/todo-item-view.component';
import { Todo } from './models/todo.model';
import { TodosLoader } from './resolvers/todos.resolver';
import { TodoResolver } from './resolvers/todo.resolver';

const routes: Route[] = [
  {
    path: '',
    component: TodosListComponent,
    pathMatch: 'full',
    resolve: {
      todos: TodosLoader,
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'add',
    component: TodoItemViewComponent,
    data: {
      isEditMode: false,
      todo: new Todo(null, null)
    }
  },
  {
    path: ':id',
    component: TodoItemViewComponent,
    data: {
      isEditMode: true,
    },
    resolve: {
      todo: TodoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TodosFeatureRoutingModule { }
