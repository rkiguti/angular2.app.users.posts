import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { usersRouting } from './users.routing';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, usersRouting ],
  declarations: [ UsersComponent, UserFormComponent ],
})
export class UsersModule { }