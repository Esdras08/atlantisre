import {Component} from '@angular/core';
import {SgiTableShow} from '../../../core/behaviors/sgi-table-show';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, ModelImpl, RequestMethod} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {TraductionService} from '../../../core/services/traduction.service';
import {DeviseModalFeatureComponent} from '../../devise/devise-modal/devise-modal.feature.component';
import {ClvTableColumnField, ClvTableParamsModel} from 'clv-advanced-table';
import {PARAMETRES} from '../../../core/services/parametres';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';

@Component({
    selector: 'app-re-formulaire-placement',
    templateUrl: './formulaire-placement.component.html',
    styleUrls: ['./formulaire-placement.component.scss']
})
export class FormulairePlacementComponent extends SgiTableShowModal {
    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TraductionService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(DeviseModalFeatureComponent);

        this.getTableParams()
        // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.PARTS_SOUSCRITES')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.PCT')))
            // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.CAPITAUX_ASSURES')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.PRIMES')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.TAUX_COM')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.COMISSIONS')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.PRIME_NETTE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SCHEMA_PLACEMENT.TABLE.COLUMNS.ACTIONS'))
                .setSize(PARAMETRES.TABLES.ACTION_SIZE))
            .setHeaderClass(PARAMETRES.TABLES.CLASS.HEADER)
            .setTableClass(PARAMETRES.TABLES.CLASS.TABLE)
            .setRowClass(PARAMETRES.TABLES.CLASS.ROW)
            .setFooterClass(PARAMETRES.TABLES.CLASS.FOOTER)
            .setTrImpairClass(PARAMETRES.TABLES.CLASS.TR_IMPAIR)
            .setTrPairClass(PARAMETRES.TABLES.CLASS.TR_PAIR)
            .setDetail(true)
            .setData({})
            .setNoDataLabel(translateService.translate.instant('APPS.TABLE.NO_DATA_MESSAGE'));
    }

    onSubmit() {
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.DEVISE.GET))
            .setMethod(RequestMethod.POST)
            .setData({
            });

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.DEVISE.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}
