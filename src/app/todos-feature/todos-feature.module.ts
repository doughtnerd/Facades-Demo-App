import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';
import { TodosListComponent } from './containers/todos-list/todos-list.component';
import { TodosHttpService } from './services/todos-http.service';
import { TodoResolver } from './resolvers/todo.resolver';
import { TodosLoader } from './resolvers/todos.resolver';
import { TodosService } from './services/todos-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosFeatureRoutingModule } from './todos-feature-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { TodoItemViewComponent } from './containers/todo-item-view/todo-item-view.component';

@NgModule({
  declarations: [
    TodosListComponent,
    TodoListItemComponent,
    TodoItemViewComponent
  ],
  imports: [
    CommonModule,
    TodosFeatureRoutingModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatGridListModule,

    StoreModule.forFeature('Todos', reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [
    TodosService,
    TodosHttpService,
    TodoResolver,
    TodosLoader
  ]
})
export class TodosFeatureModule { }
