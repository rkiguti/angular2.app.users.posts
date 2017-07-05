import { FormGroup } from '@angular/forms';

export interface FormComponent {
    hasUnsavedChanges(): Boolean;
}