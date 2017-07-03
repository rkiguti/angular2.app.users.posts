import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

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
            email: ['', Validators.required],
            phone: ['', Validators.compose([Validators.required, Validators.minLength(5)]) ],
            street: ['', Validators.required],
            suite: ['', Validators.required],
            city: ['', Validators.required],
            zipCode: ['', Validators.required]
        });
    }
}