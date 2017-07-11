import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { UserService } from '../users/user.service';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styles: [`
        li { cursor: pointer; }
        li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
        .media-list img { border-radius: 100%; }
    `],
    providers: [ PostService, UserService ] 
})
export class PostsComponent implements OnInit {
    posts = [];
    users = [];
    postsLoading;
    commentsLoading = false;    
    currentPost = null;    
    comments = null;

    constructor (
        private _postService: PostService, 
        private _userService: UserService) {
    }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }

    private loadUsers() {
        this._userService.getUsers()
            .subscribe(u => this.users = u);
    }

    private loadPosts(filter?) {
        this.postsLoading = true;
        this._postService.getPosts(filter)
            .subscribe(
                p => this.posts = p,
                null,
                () => { this.postsLoading = false; });
    }

    select(post) {
        this.comments = null;
        this.commentsLoading = true;
        this.currentPost = post;
        this._postService.getComments(post.id)
            .subscribe(c => {
                this.comments = c;
                this.commentsLoading = false;
            });
    }

    userChanged(filter) {
        this.posts = [];
        this.comments = null;
        this.currentPost = null;        
        this.loadPosts(filter);
    }
}