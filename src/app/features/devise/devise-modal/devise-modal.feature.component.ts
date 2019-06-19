import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {DeviseModel} from '../../../core/models/devise.model';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';

// @dynamic
@Component({
    selector: 'app-devise-modal',
    templateUrl: './devise-modal.feature.component.html',
    providers: []
})
export class DeviseModalFeatureComponent extends SgiModalForm implements  OnInit {
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<DeviseModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.DEVISE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new DeviseModel();
        this.setModel(model);
    }

}
