import { Router, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { NewUserComponent } from './new-user.component';

export const usersRouting = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: NewUserComponent }
]);