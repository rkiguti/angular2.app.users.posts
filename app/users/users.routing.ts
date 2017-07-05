import { Router, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { NewUserComponent } from './new-user.component';
import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

export const usersRouting = RouterModule.forChild([
    { 
        path: 'users', 
        component: UsersComponent
    },
    { 
        path: 'users/new', 
        component: NewUserComponent,
        canDeactivate: [ PreventUnsavedChangesGuard ]
    }
]);