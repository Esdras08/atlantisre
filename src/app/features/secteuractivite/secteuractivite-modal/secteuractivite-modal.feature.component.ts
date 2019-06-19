import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {SecteuractiviteModel} from '../../../core/models/secteuractivite.model';
import {API} from '../../../core/services/api-services.params';

// @dynamic
@Component({
    selector: 'app-secteuractivite-modal',
    templateUrl: './secteuractivite-modal.feature.component.html',
    providers: []
})
export class SecteuractiviteModalFeatureComponent extends SgiModalForm implements  OnInit {
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<SecteuractiviteModalFeatureComponent>) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.SECTEURACTIVITE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new SecteuractiviteModel();
        this.setModel(model);
    }

}
