import { Router, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

export const postsRouting = RouterModule.forChild([
    { 
        path: '', 
        component: PostsComponent
    }
]);