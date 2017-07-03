import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
    template: `
        <h1>Users</h1>
        <a class="btn btn-primary" aria-label="Add User" routerLink="/users/new">
            Add User
        </a>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <table class="table table-bordered" *ngIf="!isLoading">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr *ngFor="let user of users">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td><i class="glyphicon glyphicon-edit"></i></td>
                <td><i class="glyphicon glyphicon-remove"></i></td>
            </tr>
        </table>
    `,
    providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
    isLoading = true;
    users = [];

    constructor (private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService
            .getUsers()
            .subscribe(
                res => {
                    this.users = res;
                }, 
                null, 
                () => { this.isLoading = false; });
    }
}