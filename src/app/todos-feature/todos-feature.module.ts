import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';
import { TodosListComponent } from './containers/todos-list/todos-list.component';
import { TodosHttpService } from './services/todos-http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosFeatureRoutingModule } from './todos-feature-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TodoEditViewComponent } from './containers/todo-edit-view/todo-edit-view.component';
import { TodoAddViewComponent } from './containers/todo-add-view/todo-add-view.component';

@NgModule({
  declarations: [
    TodosListComponent,
    TodoListItemComponent,
    TodoEditViewComponent,
    TodoAddViewComponent
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
    MatProgressSpinnerModule,

    StoreModule.forFeature('Todos', reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [
    TodosHttpService,
  ]
})
export class TodosFeatureModule { }
