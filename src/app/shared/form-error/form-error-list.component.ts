import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PARAMETRES} from '../../core/services/parametres';

@Component({
    selector: 'app-form-error-list',
    template: `
        <app-form-error *ngIf="
                                formGroup?.get(name)?.invalid &&
                                formGroup?.get(name)?.errors?.required &&
                                (formGroup?.get(name)?.dirty ||
                                formGroup?.get(name)?.touched || submitted)">
            {{PARAMS?.VALIDATION?.MESSAGES?.REQUIRED}}
        </app-form-error>
    `
})
export class FormErrorListComponent {
    @Input('formGroup') formGroup: FormGroup;
    @Input('name') name: string;
    @Input('submitted') submitted: boolean;
    PARAMS = PARAMETRES;
}
