import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'NotFound', component: NotFoundComponent },
    { path: '**', redirectTo: '' }
]);