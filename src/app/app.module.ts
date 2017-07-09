import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ArchiveComponent } from './archive/archive.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './services/todo.service'
import { BackendService } from './services/backend.service'

import { MaterializeModule } from 'angular2-materialize';
import {routes} from './app.router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ArchiveComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule
  ],
  providers: [
    BackendService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
