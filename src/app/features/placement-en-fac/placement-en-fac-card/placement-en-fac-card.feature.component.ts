import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {Component} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {PlacementEnFacFeatureComponent} from '../placement-en-fac/placement-en-fac.feature.component';
import {PlacementEnFacModalFeatureComponent} from '../placement-en-fac-modal/placement-en-fac-modal.feature.component';
import {PlacementEnFacModel} from '../../../core/models/placement-en-fac.model';
import {FormControl} from '@angular/forms';

// @dynamic
@Component({
    selector: 'app-placement-en-fac-card',
    templateUrl: './placement-en-fac-card.feature.component.html',
    providers: []
})

export class PlacementEnFacCardFeatureComponent extends SgiTableShowModal {
    versementautraite = new FormControl(false);
    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(PlacementEnFacFeatureComponent);
    }

    launchCardmodal(button) {
        const data: any = {};
        if (button === 1) {
            this.setContent(PlacementEnFacFeatureComponent);
            this.launchmodal(data, '60%');
        } else {
            this.setContent(PlacementEnFacModalFeatureComponent);
            this.launchmodal(data, '90%');

        }
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PLACEMENT_EN_FAC.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new PlacementEnFacModel();
        this.setModel(model);
    }
}
