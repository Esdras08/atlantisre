import {BeforeAll, OptionInputChange, OptionInputChangeImpl, Request, RequestMethod} from 'clv-angular-boot';
import {FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {InputObjectV2} from './input-object-v2';
import {ComboInputV2} from './combo-input-v2';

import {CommonUtilities} from '../utilities/common.utilities';

export abstract class SgiCombo extends ComboInputV2 implements BeforeAll, OnChanges {
    @Output() public onInputChangeObj = new EventEmitter<any>(null);
    @Output() public inputValueChange = new EventEmitter<any>(null);
    @Input('inputValue') public inputValue: any;
    @Input('hint') public hint: string;

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.getRequest().setMethod(RequestMethod.POST);
        this.beforeAll();
        if (this.getRequired()) {
            this.getModel().getMask().getField(this.getName()).addValidator(Validators.required);
        }
        this.buildForm(this.getModel());
        this.setRequestGetter(this.getRequest());
        this.setRequestSetter(this.getRequest());
        this.getFormInfo();
        this.setIsValid((this.getFormInstance() as FormGroup).valid);
    }

    ngOnChanges(changes: SimpleChanges): void {
        try {
            this.getModel().getMask().getField(this.getName()).setDefaultValue(this.inputValue);
            this.updateForm(this.getModel());
        } catch (e) {
        }
    }

    afterGetFormInfo(formInfo: any): void {
        try {
            if (this.getSelected()) {
                this.getModel().getMask().getField(this.getName()).setDefaultValue(this.getSelected());
                this.updateForm(this.getModel());
            }
        } catch (e) {
        }
    }

    checkInfo() {
        try {
            if (!(this.getFormData().Items.length > 0)) {
                this.getFormInfo();
            }
        } catch (e) {
        }
    }

    handleInputChange(value: any): void {
        this.setSelected(value);
        try {
            this.getModel().getMask().getField(this.getName()).setDefaultValue(this.getSelected());
            this.updateForm(this.getModel());
            this.onInputChangeObj.emit(this.getFormData().Items.find((val) => {
                return val[this.getName()] === value;
            }));
            if (this.getRequired()) {
                if (CommonUtilities.IsUndefinedOrNull((this.getFormInstance() as FormGroup).value[this.getName()]) ||
                    CommonUtilities.StringIsUndefinedOrNull((this.getFormInstance() as FormGroup).value[this.getName()])) {
                    this.setIsValid(false);
                }
            } else {
                this.setIsValid((this.getFormInstance() as FormGroup).valid);
            }
            this.onInputChange.emit(new OptionInputChangeImpl<any>()
                .setInput(new InputObjectV2()
                    .setName(this.getName())
                    .setValue(value).setObject(this.getFormData().Items.find((val) => {
                        return val[this.getName()] === value;
                    })))
                .setValidation((this.getFormInstance() as FormGroup).valid));
        } catch (e) {
        }
        if (value === undefined) { value = undefined; }
        this.inputValueChange.emit(value);
    }

    getClassInstance(className: string): any {
        return undefined;
    }

    public abstract beforeAll(): void;

    afterSendingForm(result: any): void {
    }

    beforeSending(request: Request<any>): void {
    }

    formToDataSending(formValue: any, formInfo: any): any {
        return undefined;
    }

    optionInputHasChanged(obj: OptionInputChange<any>): void {
    }
}
