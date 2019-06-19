import {
    FormBuilderImpl,
    MessageImpl,
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl,
    MessageType,
    Model,
    ModelMaskField,
    OptionInput,
    OptionInputChange,
    PromptActionImpl,
    PromptActionType,
    Request,
    ResponseStatusCode
} from 'clv-angular-boot';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {ClassBuilderImpl} from '../utilities/class-builder.utilities';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {CommonUtilities} from '../utilities/common.utilities';
import {InputObjectV2} from './input-object-v2';
import {InputObjectV2Interface} from './input-object-v2.interface';
import {throwError} from 'rxjs';

export abstract class SgiForm  extends FormBuilderImpl<any, any> implements OnInit {
   private nameModel: string;
   private _submitted: boolean;
   private _isNewItem = true;
    private optionsInputss: InputObjectV2Interface<any, any, ValidatorFn>[] = [];
   private _newItem: any;
  constructor(public httpRequest: HttpClient,
              public toast: MessageShowerToastImpl,
              public alert: MessageShowerAlertImpl,
              public snakeBar: MessageShowerSnakeBarImpl) {
    super(httpRequest, toast, alert, snakeBar);
    this.getRequestGetter().setUrl('');
    this.setRequest(this.getRequestGetter());
      this.getMessage(200).setMessage('Requête effectuée avec succès');
    this.beforeAll();
    this.buildForm(this.getModel());
    if (!this.isNewItem && !CommonUtilities.IsUndefinedOrNull(this.newItem) &&
        this.getRequestGetter().getUrl() !== WebServicesUtilities.getSimpleUrl('', '')) {
        this.getFormInfo();
    } else {
      // this.newItem
    }
  }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    afficheValideForm(message: string = 'Veuillez remplir correctement le formulaire', title: string = 'Formulaire invalide') {
      this.toast.setMessage(new MessageImpl().setMessage(message).setTitle(title).setType(MessageType.WARNING));
      this.toast.show();
    }

    get isNewItem(): boolean {
        return this._isNewItem;
    }

    set isNewItem(value: boolean) {
        this._isNewItem = value;
    }

    get newItem(): any {
        return this._newItem;
    }

    set newItem(value: any) {
        this._newItem = value;
        this._isNewItem = CommonUtilities.IsUndefinedOrNull(this._newItem);
        const cls: Model<ValidatorFn> = this.getModel();
        cls.getMask().getFields().map((field: ModelMaskField<any, ValidatorFn>) => {
            field.setDefaultValue(value[field.getName()]);
        });
        this.getOptionInputs().map((input: OptionInput<any, any, ValidatorFn>) => {
            input.setSelected(value[input.getName()]);
        });
        this.setFormData({Items: [value]});
        this.updateForm(cls);
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

    public getOptionInput(name: string): InputObjectV2Interface<any, any, ValidatorFn> {
        return this.optionsInputss.find((input: InputObjectV2Interface<any, any, ValidatorFn>) => {
            return input.getName() === name;
        });
    }


    public addOptionInput(input: InputObjectV2Interface<any, any, ValidatorFn>): this {
        this.optionsInputss.push(input);
        return this;
    }

    public getOptionInputs(): InputObjectV2Interface<any, any, ValidatorFn>[] {
        return this.optionsInputss;
    }


    public removeOptionInputs(input: InputObjectV2Interface<any, any, ValidatorFn>): this {
        return this;
    }

  public formToDataSending(formValue: any, formInfo: any): any {
    if (!CommonUtilities.IsUndefinedOrNull(formInfo)) {
      return Object.assign(formInfo.Items[0], formValue);
    } else {
      return formValue;
    }
  }

    public isSuccess(response: any): boolean {
      this.response = response;
        return response.status === ResponseStatusCode.OK && response.body.HasError === false;
    }

  public afterGetFormInfo(formInfo: any): void {
    const cls: Model<ValidatorFn> = this.getModel();
    cls.getMask().getFields().map((field: ModelMaskField<any, ValidatorFn>) => {
      field.setDefaultValue(formInfo.Items[0][field.getName()]);
    });
    this.getOptionInputs().map((input: OptionInput<any, any, ValidatorFn>) => {
      input.setSelected(formInfo.Items[0][input.getName()]);
    });
    this.updateForm(cls);
  }

  public afterSendingForm(result: any): void {
    if (result !== null && result !== undefined &&
        this.getRequest().getUrl() !== WebServicesUtilities.getSimpleUrl('', '')) {
      this.getFormInfo();
    }
  }

    public sendForm(): void {
      this.submitted = true;
        this.setRequest(this.getRequestSetter());
        if (this.canSend(this.getRequest())) {
            this.sendRequest().subscribe(response => {
                this.afterSendingForm(response);
            });
        } else {
            this.afficheValideForm();
        }
    }

  canSend(request: Request<any>): boolean {
    return this.getFormInstance().valid && this.isInputsAreValid();
  }

  private isInputsAreValid() {
      try {
          let valid = true;
          this.getOptionInputs().map((inp) => {
              if (!inp.getIsValid()) {
                  console.log('valid', inp);
                  valid = false;
              }
          });
          return valid;
      } catch (e) {
          this.afficheValideForm();
      }
  }

  optionInputHasChanged(obj: OptionInputChange<any>): void {
      try {
          (this.getFormInstance() as FormGroup).setControl(obj.getInput().getName(),
              new FormControl((obj.getInput() as InputObjectV2).getObject()[obj.getInput().getName()]));
      } catch (e) {
      }
  }

    afterError(status: number) {
        this.alert.clearActions().addAction(new PromptActionImpl().setTitle('Fermer').setType(PromptActionType.PRIORITY_HIGHT)
            .setKey(true));
        if (status === 200) {
            this.alert.setMessage(new MessageImpl().setType(MessageType.ERROR).setMessage(this.response.body.Message)
                .setTitle('Erreur')).show();
        } else {
            this.alert.setMessage(this.getMessage(status)).show();
        }
    }

    public handleError(error: HttpErrorResponse) {
        SgiForm.me.afterError(error.status);
        return throwError(
            'hey Something bad happened; please try again later.');
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
