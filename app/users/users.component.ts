import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    templateUrl: 'app/users/users.component.html',
    providers: [ UserService ]
})
export class UsersComponent implements OnInit {
    isLoading = true;
    users = [];

    constructor (private _userService: UserService) {
    }

    ngOnInit() {
        this._userService
            .getUsers()
            .subscribe(
                res => {
                    this.users = res;
                }, 
                null, 
                () => { this.isLoading = false; });
    }

    deleteUser(user) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
            this.users.splice(index, 1);

			this._userService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
						this.users.splice(index, 0, user);
					});
		}
	}
}