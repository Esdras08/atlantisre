import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PARAMETRES} from '../../core/services/parametres';
import {CommonUtilities} from '../../core/utilities/common.utilities';

@Component({
    selector: 'app-form-error-list',
    template: `
        <app-form-error *ngIf="
                                formGroup?.get(name)?.invalid &&
                                formGroup?.get(name)?.hasError('required') &&
                                (formGroup?.get(name)?.dirty ||
                                formGroup?.get(name)?.touched || submitted)">
            {{PARAMS?.VALIDATION?.MESSAGES?.REQUIRED}}
        </app-form-error>
        <app-form-error *ngIf="
                                formGroup?.get(name)?.invalid &&
                                formGroup?.get(name)?.hasError('pattern') &&
                                !formGroup?.value[name]+''.match(PARAMS?.VALIDATION?.IS_NUMBER) &&
                                (formGroup?.get(name)?.dirty ||
                                formGroup?.get(name)?.touched || submitted)">
            {{PARAMS?.VALIDATION?.MESSAGES?.MUST_BY_NUMBER}}
        </app-form-error>
    `
})
export class FormErrorListComponent {
    @Input('formGroup') formGroup: FormGroup;
    @Input('name') name: string;
    @Input('submitted') submitted: boolean;
    PARAMS = PARAMETRES;
    stringCleanSpace(value) {
        return CommonUtilities.stringCleanSpace(value);
    }
}

