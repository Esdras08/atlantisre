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
import {TraiteModalFeatureComponent} from '../traite-modal/traite-modal.feature.component';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {BrancheModel} from '../../../core/models/branche.model';
import {ReassureurModel} from '../../../core/models/reassureur.model';
import {StructureModel} from '../../../core/models/structure.model';

@Component({
    selector: 'app-re-traite',
    templateUrl: './traite.feature.component.html',
})
export class TraiteFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(TraiteModalFeatureComponent);

        this.getTableParams()
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('TRAITE.TABLE.COLUMNS.LIBELLE'))
                .setName('Libelle'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('TRAITE.TABLE.COLUMNS.NATURE_ACTIVITE'))
                .setName('NatureActivite'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('TRAITE.TABLE.COLUMNS.BRANCHE'))
                .setName('IdBranche'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('TRAITE.TABLE.COLUMNS.REASSUREUR'))
                .setName('IdReassureur'))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('TRAITE.TABLE.COLUMNS.STRUCTURE'))
                .setName('IdStructure'))
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

    afterGetFormInfo(formInfo: any): any {
        super.afterGetFormInfo(formInfo);
        formInfo.Items.map((value) => {
            try {
                BrancheModel.findById(this.httpClient, value.IdBranche).subscribe(response => {
                    value.Branche = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                ReassureurModel.findById(this.httpClient, value.IdReassureur).subscribe(response => {
                    value.Reassureur = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                StructureModel.findById(this.httpClient, value.IdStructure).subscribe(response => {
                    value.Structure = response.body.Items[0];
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
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TRAITE.GET))
            .setMethod(RequestMethod.POST)
            .setData({});


        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TRAITE.SET))
            .setMethod(RequestMethod.POST)
            .setData({});

    }
}


