import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { usersRouting } from './users.routing';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, usersRouting ],
  declarations: [ UsersComponent, UserFormComponent ],
})
export class UsersModule { }