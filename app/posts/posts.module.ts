import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { postsRouting } from './posts.routing';

import { PostsComponent } from './posts.component';

@NgModule({
  imports:      [ BrowserModule, postsRouting ],
  declarations: [ PostsComponent ],
})
export class PostsModule { }