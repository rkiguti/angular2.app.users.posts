import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { EmailValidators } from '../shared/emailValidators';

@Component({
    templateUrl: 'app/users/new-user.component.html',
    styles: [`
        input.ng-touched.ng-invalid {
            border: 1px solid red;
        }
    `]
})
export class NewUserComponent {

    newUserForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.newUserForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidators.shouldBeValid])],
            phone: [''],
            street: [''],
            suite: [''],
            city: [''],
            zipCode: ['']
        });
    }
}