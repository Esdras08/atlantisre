import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {HttpClient} from '@angular/common/http';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, ModelImpl, RequestMethod} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {ClvTableColumnField} from 'clv-advanced-table';
import {Component, OnChanges} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {PARAMETRES} from '../../../core/services/parametres';
import {API} from '../../../core/services/api-services.params';
import {TraductionService} from '../../../core/services/traduction.service';
import {EtapeProcessusModalFeatureComponent} from '../etape-processus-modal/etape-processus-modal.feature.component';

@Component({
    selector: 'app-re-etape-processus',
    templateUrl: './etape-processus.feature.component.html',
})
export class EtapeProcessusFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TraductionService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(EtapeProcessusModalFeatureComponent);


        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('ETAPE_PROCESSUS.TABLE.COLUMNS.LIBELLE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('ETAPE_PROCESSUS.TABLE.COLUMNS.DESCRIPTION')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('ETAPE_PROCESSUS.TABLE.COLUMNS.POSITION')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('ETAPE_PROCESSUS.TABLE.COLUMNS.ACTIONS'))
                .setSize(PARAMETRES.TABLES.ACTION_SIZE))
            .setHeaderClass(PARAMETRES.TABLES.CLASS.HEADER)
            .setTableClass(PARAMETRES.TABLES.CLASS.TABLE)
            .setRowClass(PARAMETRES.TABLES.CLASS.ROW)
            .setFooterClass(PARAMETRES.TABLES.CLASS.FOOTER)
            .setTrImpairClass(PARAMETRES.TABLES.CLASS.TR_IMPAIR)
            .setTrPairClass(PARAMETRES.TABLES.CLASS.TR_PAIR)
            .setNoDataLabel(translateService.translate.instant('APPS.TABLE.NO_DATA_MESSAGE'));

    }

    onSubmit() {
    }

    ngOnChanges(changes) {
        // ObjectPath.set(this.getRequestGetter().getData(), 'ItemToSearch.DateSeance', this.DateSeance);
        this.getFormInfo();
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ETAPE_PROCESSUS.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ETAPE_PROCESSUS.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


