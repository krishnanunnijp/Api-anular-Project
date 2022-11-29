import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { UsViewComponent } from './us-view/us-view.component';
import { UserViewComponent } from './user-view/user-view.component';

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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    UsViewComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
