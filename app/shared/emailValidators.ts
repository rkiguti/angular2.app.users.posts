import { FormGroup, FormControl } from '@angular/forms';

export class EmailValidators {
    static shouldBeValid(formControl: FormControl) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(formControl.value)) {
            return { shouldBeValid: true };
        } else {
            return null;
        }
    }
}