import { CanDeactivate } from '@angular/router';

import { FormComponent } from './form-component.interface';

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {
    canDeactivate(component: FormComponent) {
        if (component.hasUnsavedChanges()) {
            return confirm("You have unsaved changes. Are you sure want to navigate away?");
        }

        return true;
    }
}