import {
    FormBuilderImpl,
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl,
    Model,
    ModelMaskField,
    OptionInput,
    OptionInputChange,
    Request,
    ResponseStatusCode
} from 'clv-angular-boot';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {OnInit} from '@angular/core';
import {ValidatorFn} from '@angular/forms';
import {ClassBuilderImpl} from '../utilities/class-builder.utilities';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {throwError} from 'rxjs';

export abstract class SgiSimpleForm  extends FormBuilderImpl<any, any> implements OnInit {
   private nameModel: string;
  constructor(public httpRequest: HttpClient,
              public toast: MessageShowerToastImpl,
              public alert: MessageShowerAlertImpl,
              public snakeBar: MessageShowerSnakeBarImpl) {
    super(httpRequest, toast, alert, snakeBar);
    this.getRequestGetter().setUrl(WebServicesUtilities.getSimpleUrl('a', 'b'));
    this.setRequest(this.getRequestGetter());
    this.beforeAll();
    this.buildForm(this.getModel());
    // this.getFormInfo();
  }

  ngOnInit(): void {
  }

  afterSuccess(status: number): void {
      this.toast.setMessage(this.getMessage(status)).show();
    }

  setNameModel(name: string): void {
    this.nameModel = name;
  }

  getNameModel(): string {
    return this.nameModel;
  }

  abstract beforeAll(): void;
  public beforeSending(request: Request<any>): void {
    request.setData({
      ItemsToSave: [request.getData()]
    });
  }

  public handleError(error: HttpErrorResponse) {
    SgiSimpleForm.me.afterError(error.status);
    return throwError(
        'hey Something bad happened; please try again later.');
  }

  public formToDataSending(formValue: any, formInfo: any): any {
    return Object.assign(formInfo.Items[0], formValue);
  }

    public isSuccess(response: any): boolean {
      this.response = response;
        return response.status === ResponseStatusCode.OK && response.body.HasError === false;
    }

  public afterGetFormInfo(formInfo: any): void {
    const cls: Model<ValidatorFn> = this.getModel();
    cls.getMask().getFields().map((field: ModelMaskField<any, ValidatorFn>, index) => {
      field.setDefaultValue(formInfo.Items[0][field.getName()]);
    });
    this.getOptionInputs().map((input: OptionInput<any, any, ValidatorFn>, index) => {
      input.setSelected(formInfo.Items[0][input.getName()]);
    });
    this.updateForm(cls);
  }

  public afterSendingForm(result: any): void {
    if (result !== null && result !== undefined) {
      // this.getFormInfo();
    }
  }

  canSend(request: Request<any>): boolean {
    return this.getFormInstance().valid;
  }

  optionInputHasChanged(obj: OptionInputChange<any>): void {
    this.getModel().getMask().getField(obj.getInput().getName()).setDefaultValue(obj.getInput().getValue());
    this.updateForm(this.getModel());
  }

  // public afterError(status: number) {
  //   super.afterError(status);
  //     // console.log(status);
  //     // this.alert.setMessage(this.getMessage(ResponseStatusCode.BAD_REQUEST)).show();
  // }

  getClassInstance(className: string): any {
    return new ClassBuilderImpl().getNewIntance(className);
  }


}
