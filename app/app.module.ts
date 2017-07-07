import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';

import { NavbarComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule,
    PostsModule,
    UsersModule,
    routing 
  ],
  declarations: [ 
    AppComponent, 
    NavbarComponent,
    HomeComponent, 
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ PreventUnsavedChangesGuard ]
})
export class AppModule { }