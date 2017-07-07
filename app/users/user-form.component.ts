import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';

import { FormComponent } from '../shared/form-component.interface';
import { EmailValidators } from '../shared/emailValidators';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    templateUrl: 'app/users/user-form.component.html',
    styleUrls: [ 'app/users/user-form.component.css' ],
    providers: [ UserService ]
})
export class UserFormComponent implements FormComponent, OnInit, OnDestroy {

    title = "";
    loaded = false;
    user = new User();
    subscription;
    newUserForm: FormGroup;

    constructor(
        fb: FormBuilder, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService
    ) {
        this.newUserForm = fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, EmailValidators.shouldBeValid]],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {
        this.subscription = this._activatedRoute.params.subscribe(params => {
            var id = params["id"];

            if (!id) {
                this.title = "Add User";
                this.loaded = true;
                return;
            }

            this._userService.getUser(id)
                .subscribe(
                    user => { 
                        this.user = user;
                        this.title = "Edit User";
                        this.loaded = true;
                    },
                    response => {
                        if (response.status == 404) {
                            this._router.navigate(['NotFound']);
                        }
                    });

                      
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    hasUnsavedChanges() {
        return this.newUserForm.dirty;
    }

    save() {
        var result;
        
        if (this.user.id) 
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user)

        result.subscribe(x => {
                this.newUserForm.reset();
                this._router.navigate(['Users']);
            });
    }
}