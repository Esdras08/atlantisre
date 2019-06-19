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
import {SuiviProcessusModalFeatureComponent} from '../suivi-processus-modal/suivi-processus-modal.feature.component';
import {EtapeProcessusModel} from '../../../core/models/etape-processus.model';
import {TypeEchangeModel} from '../../../core/models/type-echange.model';

@Component({
    selector: 'app-re-suivi-processus',
    templateUrl: './suivi-processus.feature.component.html',
})
export class SuiviProcessusFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TraductionService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(SuiviProcessusModalFeatureComponent);


        this.getTableParams()
            .addColumn(new ClvTableColumnField()
                .setTitle(translateService.translate.instant('SUIVI_PROCESSUS.TABLE.COLUMNS.ID_ETAPE_PROCESSUS')))
            .addColumn(new ClvTableColumnField()
                .setTitle(translateService.translate.instant('SUIVI_PROCESSUS.TABLE.COLUMNS.ID_TYPE_ECHANGE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('SUIVI_PROCESSUS.TABLE.COLUMNS.ACTIONS'))
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

    afterGetFormInfo(formInfo: any): any {
        super.afterGetFormInfo(formInfo);
        formInfo.Items.map((value) => {
            try {
                EtapeProcessusModel.findById(this.httpClient, value.IdEtapeProcessus).subscribe(response => {
                    console.log(value);
                    value.EtapeProcessus = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                TypeEchangeModel.findById(this.httpClient, value.IdTypeEchange).subscribe(response => {
                    console.log(response.body.Items[0]);
                    value.TypeEchange = response.body.Items[0];
                });
            } catch (e) {
            }
        });
    }

    ngOnChanges(changes) {
        this.getFormInfo();
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.SUIVI_PROCESSUS.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.SUIVI_PROCESSUS.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


