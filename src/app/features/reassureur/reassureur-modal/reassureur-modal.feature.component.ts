import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {ReassureurModel} from '../../../core/models/reassureur.model';
import {PaysAutocompleteComponent} from '../../../forms/pays/pays.autocomplete.component';

// @dynamic
@Component({
    selector: 'app-reassureur-modal',
    templateUrl: './reassureur-modal.feature.component.html',
    providers: []
})
export class ReassureurModalFeatureComponent extends SgiModalForm implements AfterViewInit {
    @ViewChild(PaysAutocompleteComponent) pays: PaysAutocompleteComponent;
    paysIv: any = '';
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ReassureurModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.paysIv = data.item.Pays.Libelle;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.pays);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.REASSUREUR.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new ReassureurModel();
        this.setModel(model);
    }

}

