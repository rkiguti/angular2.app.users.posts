import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { routing } from './app.routing';

import { NavbarComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, UsersComponent, PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ]
})
export class AppModule { }