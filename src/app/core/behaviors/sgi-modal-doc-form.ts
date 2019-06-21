import {
    HttpRequestSender,
    MessageImpl,
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl, MessageType,
    PromptActionImpl,
    PromptActionType
} from 'clv-angular-boot';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {WebServicesUtilities} from '../utilities/web-services.utilities';
import {CommonUtilities} from '../utilities/common.utilities';
import {MatDialogRef} from '@angular/material';
import {SgiForm} from './sgi-form';
import {SgiModalForm} from './sgi-modal-form';

// @dynamic
export abstract class SgiModalDocForm  extends SgiModalForm {
  constructor(public httpRequest: HttpClient,
              public toast: MessageShowerToastImpl,
              public alerts: MessageShowerAlertImpl,
              public snakeBar: MessageShowerSnakeBarImpl,
              public dialogRef: MatDialogRef<any>) {
    super(httpRequest, toast, alerts, snakeBar, dialogRef);
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
}
