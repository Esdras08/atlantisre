import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {CommonUtilities} from '../utilities/common.utilities';
import {MatDialogRef} from '@angular/material';
import {SgiForm} from './sgi-form';

// @dynamic
export abstract class SgiModalForm  extends SgiForm {
    private _dialogData: any;
  constructor(public httpRequest: HttpClient,
              public toast: MessageShowerToastImpl,
              public alert: MessageShowerAlertImpl,
              public snakeBar: MessageShowerSnakeBarImpl,
              public dialogRef: MatDialogRef<any>) {
    super(httpRequest, toast, alert, snakeBar);
    this.getRequestGetter().setUrl(WebServicesUtilities.getSimpleUrl('', ''));
    this.setRequest(this.getRequestGetter());
    this.beforeAll();
    this.buildForm(this.getModel());
  }

    get dialogData(): any {
        return this._dialogData;
    }

    set dialogData(value: any) {
        this._dialogData = value;
        try {
            this.newItem = this._dialogData.item;
        } catch (e) {
        }
        if (!this.isNewItem && !CommonUtilities.IsUndefinedOrNull(this.newItem)) {
            this.getFormInfo();
        } else {
            // this.newItem
        }
    }

    closeModal(data?) {
        this.dialogRef.close(data);
    }

    public afterSendingForm(result: any): void {
        if (result !== null && result !== undefined && this.isSuccess(result)) {
            this.closeModal();
        }
    }
}
