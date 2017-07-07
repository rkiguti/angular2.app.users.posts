import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    providers: [ PostService ] 
})
export class PostsComponent implements OnInit {
    posts: object[];
    isLoading = true;

    constructor (private _postService: PostService) {
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(p => {
                this.posts = p;
                this.isLoading = false;
            });
    }
}