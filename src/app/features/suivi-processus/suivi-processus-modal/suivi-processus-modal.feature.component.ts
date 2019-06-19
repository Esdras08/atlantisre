import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {SuiviProcessusModel} from '../../../core/models/suivi-processus.model';
import {EtapeProcessusComboComponent} from '../../../forms/etape-processus/etape-processus.combo.component';

// @dynamic
@Component({
    selector: 'app-re-suivi-processus-modal',
    templateUrl: './suivi-processus-modal.feature.component.html',
    providers: []
})
export class SuiviProcessusModalFeatureComponent extends SgiModalForm implements OnInit, AfterViewInit {
    @ViewChild(EtapeProcessusComboComponent) etapeProcessus: EtapeProcessusComboComponent;
    @ViewChild(EtapeProcessusComboComponent) typeEchange: EtapeProcessusComboComponent;
    etapeProcessusIv: any;
    typeEchangeIv: any;

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<SuiviProcessusModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.etapeProcessusIv = data.item.IdEtapeProcessus;
            this.typeEchangeIv = data.item.IdTypeEchange;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.etapeProcessus);
        this.addOptionInput(this.typeEchange);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.SUIVI_PROCESSUS.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new SuiviProcessusModel();
        this.setModel(model);
    }

}
