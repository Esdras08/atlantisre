import {BeforeAll, OptionInputChange, OptionInputChangeImpl, Request} from 'clv-angular-boot';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EventEmitter, Input, Output} from '@angular/core';
import {ClvTableParamsModel} from 'clv-advanced-table';
import {InputObjectV2} from './input-object-v2';
import {AutoCompleteInputV2} from './autocomplete-input-v2';

export abstract class SgiAutocomplete extends AutoCompleteInputV2
  implements BeforeAll {
    private params: ClvTableParamsModel = new ClvTableParamsModel();
    @Output() public onInputChangeObj = new EventEmitter<any>(null);
    @Output() public inputValueChange = new EventEmitter<any>(null);
    @Input('inputValue') public inputValue: any = '';
    @Input('hint') public hint: string;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.beforeAll();
    this.setInputSelectionValue(this.getSearchParams()[0].getName());
    this.buildForm(this.getModel());
    this.setRequestGetter(this.getRequest());
    this.setRequestSetter(this.getRequest());
    this.getFormInfo();
      this.setIsValid((this.getFormInstance() as FormGroup).valid);
  }
  afterGetFormInfo(formInfo: any): void {
      try {
          this.getTableParams().setData(formInfo.Items);
      } catch (e) {
      }
    this.getModel().getMask().getField(this.getName()).setDefaultValue(this.getSelected());
    this.updateForm(this.getModel());
  }

  afterSendingForm(result: any): void {
  }

    getTableParams(): ClvTableParamsModel {
        return this.params;
    }

    setTableParams(params: ClvTableParamsModel): void {
        this.params = params;
    }

  formToDataSending(formValue: any, formInfo: any): void {
  }

  getClassInstance(className: string): any {
    return undefined;
  }

  handleInputChange(value: any): void {
    this.setSelected(value);
    this.filterSearch();
    let val: any = null;
    try {
        const va = this.getFormData().Items.find((valu) => {
            return valu[this.getDisplayedField()] === value;
        });
        val = va[this.getDisplayedField()];
        this.onInputChangeObj.emit(va);
        const chang = new OptionInputChangeImpl<any>()
            .setInput(new InputObjectV2()
                .setName(this.getName())
                .setValue(val).setObject(va))
            .setValidation((this.getFormInstance() as FormGroup).valid);
        this.onInputChange.emit(chang);
        this.setIsValid((this.getFormInstance() as FormGroup).valid);
    } catch (e) {
        val = undefined;
    }
    if (val !== undefined) {
        this.inputValueChange.emit(val);
    }
  }

  optionInputHasChanged(obj: OptionInputChange<any>): void {
  }

  public beforeSending(request: Request<any>): void {
  }

  filterSearch(): void {
    const obj: any = {};
    try {
      if (this.getSelected() !== '' && this.getSelected() !== null && this.getSelected() !== undefined) {
        obj[this.getInputSelectionValue()] = this.getSelected();
      }
    } catch (e) {
    }
    this.getRequestGetter().setData({
      IdCurrentStructure: 1,
      IdCurrentUser: 1,
      ItemToSearch: obj
    });
    this.getFormInfo();
  }

  handleBlurInputChange(value: any): void {
    setTimeout(() => {
      this.handleInputChange(value);
    }, 50);
  }

  handleInputSelectionChange(value: any): void {
    this.setInputSelectionValue(value);
  }

  public abstract beforeAll(): void;
}
