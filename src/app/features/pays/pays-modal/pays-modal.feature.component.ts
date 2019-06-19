import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {PaysModel} from '../../../core/models/pays.model';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';

// @dynamic
@Component({
    selector: 'app-pays-modal',
    templateUrl: './pays-modal.feature.component.html',
    providers: []
})
export class PaysModalFeatureComponent extends SgiModalForm implements OnInit {
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<PaysModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PAYS.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new PaysModel();
        this.setModel(model);
    }

}
