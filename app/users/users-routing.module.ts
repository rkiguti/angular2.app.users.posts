import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

const usersRouting = RouterModule.forChild([
    { 
        path: '', 
        component: UsersComponent
    },
    { 
        path: 'new', 
        component: UserFormComponent,
        canDeactivate: [ PreventUnsavedChangesGuard ]
    },
    { 
        path: ':id', 
        component: UserFormComponent,
        canDeactivate: [ PreventUnsavedChangesGuard ]
    }
]);

@NgModule({
  imports: [
    usersRouting
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}