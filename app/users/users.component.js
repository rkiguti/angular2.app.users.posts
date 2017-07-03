"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const users_service_1 = require("./users.service");
let UsersComponent = class UsersComponent {
    constructor(_usersService) {
        this._usersService = _usersService;
        this.isLoading = true;
        this.users = [];
    }
    ngOnInit() {
        this._usersService
            .getUsers()
            .subscribe(res => {
            this.users = res;
        }, null, () => { this.isLoading = false; });
    }
};
UsersComponent = __decorate([
    core_1.Component({
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
        providers: [users_service_1.UsersService]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map