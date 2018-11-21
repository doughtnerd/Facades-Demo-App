import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TodosListComponent } from './containers/todos-list/todos-list.component';
import { TodoEditViewComponent } from './containers/todo-edit-view/todo-edit-view.component';
import { TodoAddViewComponent } from './containers/todo-add-view/todo-add-view.component';

const routes: Route[] = [
  {
    path: '',
    component: TodosListComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: TodoAddViewComponent,
  },
  {
    path: ':id',
    component: TodoEditViewComponent,
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
