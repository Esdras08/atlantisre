import {AutocompleteInputImpl} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {InputObjectV2Interface} from './input-object-v2.interface';
import {Input} from '@angular/core';

export abstract class AutoCompleteInputV2 extends AutocompleteInputImpl<any, any, any[], any, any>
    implements InputObjectV2Interface<any, any, any> {
    private isValid;
    @Input('submitted') submitted: boolean;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    setIsValid(valid: boolean) {
        this.isValid = valid;
    }

    getIsValid(): boolean {
        return this.isValid;
    }
}
