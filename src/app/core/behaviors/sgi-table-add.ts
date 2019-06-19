import {
    ArrayFormImpl,
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl,
    Model,
    ModelMaskFieldImpl,
    OptionInputChange,
    Request,
    RequestType,
    ResponseStatusCode
} from 'clv-angular-boot';
import {ClvTableColumnField, ClvTableParamsModel} from 'clv-advanced-table';
import {PageEvent} from '@angular/material';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ClassBuilderImpl} from '../utilities/class-builder.utilities';
import {ValidatorFn} from '@angular/forms';
import * as ObjectPath from 'object-path';
import {CommonUtilities} from '../utilities/common.utilities';
import {throwError} from 'rxjs';

export abstract class SgiTableAdd extends ArrayFormImpl<any, any, ClvTableColumnField[], PageEvent> {
    private params: ClvTableParamsModel = new ClvTableParamsModel();
    private nameModel: string;
    private initialData: any;
    private initialDataSetter: any;
    private datasToSend: any[] = [];
    constructor(public httpRequest: HttpClient,
                public toasts: MessageShowerToastImpl,
                public alerts: MessageShowerAlertImpl,
                public snakeBars: MessageShowerSnakeBarImpl) {
        super(httpRequest, toasts, alerts, snakeBars);
        this.getMessage(200).setMessage('Requête effectuée avec succès');
        this.beforeAll();
        this.initialData = CommonUtilities.clone(this.getRequestGetter().getData());
        this.initialDataSetter = CommonUtilities.clone(this.getRequestSetter().getData());
        this.buildArrayForm([]);
    }

    public isSuccess(response: any): boolean {
        // this.response = response;
        return response.status === ResponseStatusCode.OK && response.body.HasError === false;
    }

    public handleError(error: HttpErrorResponse) {
        SgiTableAdd.me.afterError(error.status);
        return throwError(
            'Something bad happened; please try again later.');
    }

    setNameModel(name: string): void {
        this.nameModel = name;
    }

    setInitialData(data) {
        this.initialData = CommonUtilities.clone(data);
    }

    getInitialData(): any {
        return this.initialData;
    }

    getNameModel(): string {
        return this.nameModel;
    }

    abstract beforeAll();
    getTableParams(): ClvTableParamsModel {
        return this.params;
    }

    setTableParams(params: ClvTableParamsModel): void {
        this.params = params;
    }

    getDataToSend(): any {
        return this.datasToSend;
    }
    afterSendingForm(result: any): void {
    }

    getClassInstance(className: string): any {
        return new ClassBuilderImpl().getNewIntance(className);
    }

    optionInputHasChanged(obj: OptionInputChange<any>): void {
    }

    beforeSending(request: Request<any>): void {
        if (request.getRequestType() === RequestType.SEETER) {
            request.setData(CommonUtilities.clone(this.initialDataSetter));
            ObjectPath.set(request.getData(), 'ItemsToSave', this.getFormData());
        }
    }

    afterGetFormInfo(formInfo: any): any {
    }

    private toSend() {
        this.clearModels();
        this.params.setLength(this.datasToSend.length);
        this.params.setData(CommonUtilities.clone(this.datasToSend));
        this.setFormData(CommonUtilities.clone(this.datasToSend));
        this.datasToSend.map((value, index) => {
            const model: Model<ValidatorFn> = this.getModel();
            model.getMask()
                .addField(new ModelMaskFieldImpl().setName(this.getSelectedFieldName()))
                .getFields().map((field, id) => {
                field.setDefaultValue(value[field.getName()]);
            });
            this.addModel(model);
        });
        // Mise a jour du formulaire
        this.updateArrayForm(this.getModels());
    }
    addDataToSend(data: any): void {
        this.datasToSend.push(CommonUtilities.clone(data));
        this.toSend();
    }

    setDataToSend(data: any): void {
        this.datasToSend = CommonUtilities.clone(data);
        this.toSend();
    }

    removeData(index: number): void {
        this.datasToSend.splice(index, 1);
        this.toSend();
    }

    clearData() {
        this.datasToSend = [];
        this.toSend();
    }

    formToDataSending(formValue: any, formInfo: any): any {
        this.datasToSend.map((value, id) => {
            if (formValue[this.getArrayName()][id][this.getSelectedFieldName()]) {
                Object.assign(value, formValue[this.getArrayName()][id]);
            }
        });
        return this.datasToSend;
    }

    filterSearch(): void {
    }
}
