import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {HttpClient} from '@angular/common/http';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, ModelImpl, RequestMethod} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {ClvTableColumnField} from 'clv-advanced-table';
import {Component, OnChanges, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {PARAMETRES} from '../../../core/services/parametres';
import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';
import {EncaissementModalFeatureComponent} from '../encaissement-modal/encaissement-modal.feature.component';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {StructureAutocompleteComponent} from '../../../forms/structure/structure.autocomplete.component';
import {StatutAffaireComboComponent} from '../../../forms/statut-affaire/statut-affaire.combo.component';

@Component({
    selector: 'app-re-encaissement',
    templateUrl: './encaissement.feature.component.html',
})
export class EncaissementFeatureComponent extends SgiTableShowModal implements OnChanges {
    @ViewChild(StatutAffaireComboComponent) statuss: StatutAffaireComboComponent;
    statusIv: any;
    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(EncaissementModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle('Nom'))
            .addColumn(new ClvTableColumnField().setTitle('Type'))
            .addColumn(new ClvTableColumnField().setTitle('Montant'))
            .addColumn(new ClvTableColumnField().setTitle('Date'))
            .addColumn(new ClvTableColumnField().setTitle('Reste à payer'))
            .addColumn(new ClvTableColumnField().setTitle('Statut'))
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
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PAYS.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PAYS.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


