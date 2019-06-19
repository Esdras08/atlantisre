import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {Component} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {DeviseModel} from '../../../core/models/devise.model';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {ProcessusFeatureComponent} from '../processus/processus.feature.component';
import {ProcessusModalFeatureComponent} from '../processus-modal/processus-modal.feature.component';

// @dynamic
@Component({
    selector: 'app-processus-card',
    templateUrl: './processus-card.feature.component.html',
    providers: []
})

export class ProcessusCardFeatureComponent extends SgiTableShowModal {
    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(ProcessusFeatureComponent);
    }

    launchCardmodal(button) {
        const data: any = {};
        if (button === 1) {
            this.setContent(ProcessusFeatureComponent);
            this.launchmodal(data, '80%');
        } else {
            this.setContent(ProcessusModalFeatureComponent);
            this.launchmodal(data, '60%');

        }
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROCESSUS
                .SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new DeviseModel();
        this.setModel(model);
    }
}
