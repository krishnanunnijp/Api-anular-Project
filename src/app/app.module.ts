import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { UsViewComponent } from './us-view/us-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersViewComponent } from './users-view/users-view.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';
import { ApiNavbarComponent } from './api-navbar/api-navbar.component'

const myRouter:Routes=[
  {
    path:"view",
    component: PassengerViewComponent
  },
  {
    path:"usview",
    component: UsViewComponent
  },
  {
    path:"userview",
    component: UserViewComponent
  },
  {
    path:"productview",
    component: ProductViewComponent
  },
  {
    path:"users",
    component: UsersViewComponent
  },
  {
    path:"todo",
    component: TodoAppComponent
  },
  {
    path:"",
    component: QuotesAppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    UsViewComponent,
    UserViewComponent,
    ProductViewComponent,
    UsersViewComponent,
    TodoAppComponent,
    QuotesAppComponent,
    ApiNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
