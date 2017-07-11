import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styles: [`
        li {
            cursor: pointer;
        }

        .media-list img {
            border-radius: 100%;
        }
    `],
    providers: [ PostService ] 
})
export class PostsComponent implements OnInit {
    posts: object[];
    isLoading = true;
    currentPost = null;
    comments = null;
    isLoadingComments = false;

    constructor (private _postService: PostService) {
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(p => {
                this.posts = p;
                this.isLoading = false;
            });
    }

    select(post) {
        this.comments = null;
        this.isLoadingComments = true;
        this.currentPost = post;
        this._postService.getComments(post.id)
            .subscribe(c => {
                this.comments = c;
                this.isLoadingComments = false;
            });
    }
}