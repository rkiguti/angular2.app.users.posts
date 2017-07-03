import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { usersRouting } from './users.routing';

import { UsersComponent } from './users.component';
import { NewUserComponent } from './new-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, usersRouting ],
  declarations: [ UsersComponent, NewUserComponent ],
})
export class UsersModule { }