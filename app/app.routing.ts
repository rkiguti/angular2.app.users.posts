import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', redirectTo: '' }
]);