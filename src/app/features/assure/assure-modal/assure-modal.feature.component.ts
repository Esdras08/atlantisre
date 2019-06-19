import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {FilialeComboComponent} from '../../../forms/filiale/filiale.combo.component';
import {AssureModel} from '../../../core/models/assure.model';
import {PersonneComboComponent} from '../../../forms/personne/personne.combo.component';

// @dynamic
@Component({
    selector: 'app-assure-modal',
    templateUrl: './assure-modal.feature.component.html',
    providers: []
})
export class AssureModalFeatureComponent extends SgiModalForm implements OnInit {
    @ViewChild(FilialeComboComponent) devise: FilialeComboComponent;
    @ViewChild(PersonneComboComponent) personne: PersonneComboComponent;
    filialeIv: any;
    personneIv: any;

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<AssureModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.filialeIv = data.item.IdFiliale;
            this.personneIv = data.item.IdPersonne;
        } catch (e) {
        }
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ASSURE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new AssureModel();
        this.setModel(model);
    }

}
