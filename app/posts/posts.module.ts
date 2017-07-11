import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { postsRouting } from './posts.routing';

import { PostsComponent } from './posts.component';

@NgModule({
  imports:      [ CommonModule, SharedModule, postsRouting ],
  declarations: [ PostsComponent ],
})
export class PostsModule { }