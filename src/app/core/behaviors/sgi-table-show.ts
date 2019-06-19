import {
    ArrayFormImpl,
    HttpRequestSender,
    MessageImpl,
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl,
    MessageType,
    Model,
    ModelMaskFieldImpl,
    OptionInputChange,
    PromptActionImpl,
    PromptActionType,
    Request,
    RequestType,
    ResponseStatusCode
} from 'clv-angular-boot';
import {ClvTableColumnField, ClvTableParamsModel} from 'clv-advanced-table';
import {MatDialogRef, PageEvent} from '@angular/material';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ClassBuilderImpl} from '../utilities/class-builder.utilities';
import {ValidatorFn} from '@angular/forms';
import * as ObjectPath from 'object-path';
import {CommonUtilities} from '../utilities/common.utilities';
import {throwError} from 'rxjs';

export abstract class SgiTableShow extends ArrayFormImpl<any, any, ClvTableColumnField[], PageEvent> {
    private params: ClvTableParamsModel = new ClvTableParamsModel();
    private nameModel: string;
    private initialData: any;
    private sendAll: boolean;
    constructor(public httpRequest: HttpClient,
                public toasts: MessageShowerToastImpl,
                public alerts: MessageShowerAlertImpl,
                public snakeBars: MessageShowerSnakeBarImpl) {
        super(httpRequest, toasts, alerts, snakeBars);
        this.sendAll = false;
        this.getMessage(200).setMessage('Requête effectuée avec succès');
        this.beforeAll();
        this.initialData = CommonUtilities.clone(this.getRequestGetter().getData());
        this.buildArrayForm([]);
        this.getFormInfo();
    }


    public isSuccess(response: any): boolean {
        this.response = response;
        return response.status === ResponseStatusCode.OK && response.body.HasError === false;
    }

    askDelete(item: any) {
        this.alerts.clearActions()
            .addAction(new PromptActionImpl().setType(PromptActionType.PRIORITY_HIGHT).setKey(false).setTitle('Non'))
            .addAction(new PromptActionImpl().setType(PromptActionType.PRIORITY_LOW).setKey(true).setTitle('Oui'));
        this.alerts.setMessage(new MessageImpl().setMessage('Voulez-vous effectuer cette suppression?').setTitle('Suppression')
            .setType(MessageType.ERROR));
        const choice = this.alerts.show();
        (choice as MatDialogRef<any, any>).afterClosed().subscribe((mustDelete) => {
            if (mustDelete) {
                try {
                    item.IsDeleted = 1;
                    const req = new HttpRequestSender(this.httpRequest);
                    this.getRequestSetter().setData({ItemsToSave: [item]});
                    req.setRequest(this.getRequestSetter());
                    req.sendRequest().subscribe((response: HttpResponse<any>) => {
                        if (this.isSuccess(response)) {
                            this.afterSuccess(response.status);
                        } else {
                            this.afterError(response.status);
                        }
                        setTimeout(() => {
                            this.getFormInfo();
                        }, 1000);
                    });
                } catch (e) {
                }
            }
        });
    }

    afterSuccess(status: number) {
        this.toasts.setMessage(this.getMessage(status)).show();
    }

    afterError(status: number) {
        this.alert.clearActions().addAction(new PromptActionImpl().setTitle('Fermer').setType(PromptActionType.PRIORITY_HIGHT)
            .setKey(true));
        if (status === 200 && !CommonUtilities.StringIsUndefinedOrNull(this.response.body.Message)) {
            this.alert.setMessage(new MessageImpl().setType(MessageType.ERROR).setMessage(this.response.body.Message)
                .setTitle('Erreur')).show();
        } else if (status !== 200) {
            this.alert.setMessage(this.getMessage(status)).show();
        }
    }

    public handleError(error: HttpErrorResponse) {
        SgiTableShow.me.afterError(error.status);
        return throwError(
            'Something bad happened; please try again later. :!(');
    }

    // afterError(status: number) {
    //     this.alerts.clearActions().addAction(new PromptActionImpl().setTitle('Fermer').setType(PromptActionType.PRIORITY_HIGHT)
    //         .setKey(true));
    //     this.alerts.setMessage(this.getMessage(status)).show();
    // }

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

    afterSendingForm(result: any): void {
        if (this.getRequest().getRequestType() === RequestType.SEETER) {
            this.getFormInfo();
        }
    }

    getClassInstance(className: string): any {
        return new ClassBuilderImpl().getNewIntance(className);
    }

    optionInputHasChanged(obj: OptionInputChange<any>): void {
    }

    beforeSending(request: Request<any>): void {
        // let datass: any[];
        request.setData({
            ItemsToSave: request.getData()
        });
    }

    afterGetFormInfo(formInfo: any): any {
        this.clearModels();
        this.params.setLength(formInfo.Count);
        if (formInfo.Items.length > 0) {
            this.params.setData(formInfo.Items);
        }
        formInfo.Items.map((value, index) => {
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

    sendFormAll() {
        this.sendAll = true;
        this.sendForm();
    }

    formToDataSending(formValue: any, formInfo: any): any {
        const toSave: any[] = [];
        if (!this.sendAll) {
            const fi = CommonUtilities.clone(formInfo.Items);
            fi.map((value, id) => {
                if (formValue[this.getArrayName()][id][this.getSelectedFieldName()]) {
                    Object.assign(value, formValue[this.getArrayName()][id]);
                    toSave.push(value);
                }
            });
        } else {
            formInfo.Items.map((value, id) => {
                Object.assign(value, formValue[this.getArrayName()][id]);
                toSave.push(value);
            });
        }
        return toSave;
    }

    sendFormSelected() {
        this.sendAll = false;
        this.sendForm();
    }

    filterSearch(): void {
        this.getRequestGetter().setData(CommonUtilities.clone(this.initialData));
        try {
            this.getSearchParams().map((param: ClvTableColumnField, id) => {
                if (param.getSearch() !== '' && param.getSearch() !== null && param.getSearch() !== undefined) {
                    ObjectPath.set(this.getRequestGetter().getData(), 'ItemToSearch.' + param.getName(), param.getSearch());
                }
            });
        } catch (e) {
        }
        try {
            ObjectPath.set(this.getRequestGetter().getData(), 'Size', this.getPageParams().pageSize);
        } catch (e) {
        }
        try {
            ObjectPath.set(this.getRequestGetter().getData(), 'Index', this.getPageParams().pageIndex);
        } catch (e) {
        }
        this.getFormInfo();
    }
}
