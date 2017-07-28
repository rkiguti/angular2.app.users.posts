import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    UsersRoutingModule 
  ],
  declarations: [ 
    UsersComponent, 
    UserFormComponent 
  ],
})
export class UsersModule { }