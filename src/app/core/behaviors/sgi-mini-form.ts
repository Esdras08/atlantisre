import {SgiForm} from './sgi-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl} from 'clv-angular-boot';
import {Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

export abstract class SgiMiniForm extends SgiForm {
    @Input('data') data: any;
    private _modelInstance: any;
    constructor(
        public httpClient: HttpClient,
        public toastMessage: MessageShowerToastImpl,
        public alertMessage: MessageShowerAlertImpl,
        public snakeBarMessage: MessageShowerSnakeBarImpl,
    ) {
        super(httpClient, toastMessage, alertMessage, snakeBarMessage);
    }


    get modelInstance(): any {
        return this._modelInstance;
    }

    set modelInstance(value: any) {
        this._modelInstance = value;
    }

    public clearForm() {
        (this.getFormInstance() as FormGroup).reset();
    }
}
