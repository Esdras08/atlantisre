import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {TypeEchangeModel} from '../../../core/models/type-echange.model';

// @dynamic
@Component({
    selector: 'app-re-type-echange-modal',
    templateUrl: './type-echange-modal.feature.component.html',
    providers: []
})
export class TypeEchangeModalFeatureComponent extends SgiModalForm implements OnInit {
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<TypeEchangeModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TYPE_ECHANGE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new TypeEchangeModel();
        this.setModel(model);
    }

}
