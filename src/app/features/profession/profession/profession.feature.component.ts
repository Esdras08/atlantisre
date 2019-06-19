import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {HttpClient} from '@angular/common/http';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, ModelImpl, RequestMethod} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {ClvTableColumnField} from 'clv-advanced-table';
import {Component, OnChanges} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {PARAMETRES} from '../../../core/services/parametres';
import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';
import * as ObjectPath from 'object-path';
import {API} from '../../../core/services/api-services.params';
import {ProfessionModalFeatureComponent} from '../profession-modal/profession-modal.feature.component';


@Component({
    selector: 'app-re-profession',
    templateUrl: './profession.feature.component.html',
})
export class ProfessionFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(ProfessionModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle('Libellé'))
            .addColumn(new ClvTableColumnField().setTitle('Description'))
            .addColumn(new ClvTableColumnField().setTitle('Actions')
                .setSize(PARAMETRES.TABLES.ACTION_SIZE))
            .setHeaderClass(PARAMETRES.TABLES.CLASS.HEADER)
            .setTableClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.TABLE'))
            .setRowClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.ROW'))
            .setFooterClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.FOOTER'))
            .setTrImpairClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.TR_IMPAIR'))
            .setTrPairClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.TR_PAIR'));

    }

    onSubmit() {
    }

    ngOnChanges(changes) {
        this.getFormInfo();
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROFESSION.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROFESSION.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


