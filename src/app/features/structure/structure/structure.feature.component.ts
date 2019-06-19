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
import {StructureModalFeatureComponent} from '../structure-modal/structure-modal.feature.component';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-re-structure',
    templateUrl: './structure.feature.component.html',
})
export class StructureFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(StructureModalFeatureComponent);

        this.getTableParams()
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('STRUCTURE.TABLE.COLUMNS.RAISON_SOCIALE'))
                .setName('RaisonSocialeStructure'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('STRUCTURE.TABLE.COLUMNS.DECRET'))
                .setName('DecretCreation'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('STRUCTURE.TABLE.COLUMNS.NUMERO_AGREMENT'))
                .setName('NumeroAgrement'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('STRUCTURE.TABLE.COLUMNS.DEVISE'))
                .setName('IdDevise'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('STRUCTURE.TABLE.COLUMNS.CAPITAL_SOCIAL'))
                .setName('CapitalSocial'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('STRUCTURE.TABLE.COLUMNS.PAYS'))
                .setName('IdPays'))
            .addColumn(new ClvTableColumnField().setTitle('Actions')
                .setSize(PARAMETRES.TABLES.ACTION_SIZE))
            .setHeaderClass(PARAMETRES.TABLES.CLASS.HEADER)
            .setTableClass(PARAMETRES.TABLES.CLASS.TABLE)
            .setRowClass(PARAMETRES.TABLES.CLASS.ROW)
            .setFooterClass(PARAMETRES.TABLES.CLASS.FOOTER)
            .setTrImpairClass(PARAMETRES.TABLES.CLASS.TR_IMPAIR)
            .setTrPairClass(PARAMETRES.TABLES.CLASS.TR_PAIR)
            .setNoDataLabel(translateService.instant('APPS.TABLE.NO_DATA_MESSAGE'));

    }

    onSubmit() {
    }

    ngOnChanges(changes) {
        this.getFormInfo();
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.STRUCTURE.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.STRUCTURE.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


