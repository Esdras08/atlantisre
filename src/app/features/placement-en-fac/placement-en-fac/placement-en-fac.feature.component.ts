import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {HttpClient} from '@angular/common/http';
import {ModalBuilder} from '../../../shared/modal/modal-builder';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, ModelImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ClvTableColumnField} from 'clv-advanced-table';
import {Component, Inject, OnChanges} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {PARAMETRES} from '../../../core/services/parametres';
import {API} from '../../../core/services/api-services.params';
import {TraductionService} from '../../../core/services/traduction.service';
import {PlacementEnFacModalFeatureComponent} from '../placement-en-fac-modal/placement-en-fac-modal.feature.component';
import {SgiTableModal} from '../../../core/behaviors/sgi-table-modal';
import {ProcessusModel} from '../../../core/models/processus.model';
import {PaysModel} from '../../../core/models/pays.model';

@Component({
    selector: 'app-re-placement-en-fac',
    templateUrl: './placement-en-fac.feature.component.html',
})
export class PlacementEnFacFeatureComponent extends SgiTableModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<PlacementEnFacModalFeatureComponent>,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TraductionService) {
        super(httpClient, toast, alertMessage, snakebar, dialogRef, dialog, modalBuilder);
        this.dialogData = data;
        this.setContent(PlacementEnFacModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
        // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.DATE_CONSULTATION')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.DATE_EFFET')))
            // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.DATE_ECHEANCE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.EN_COURS')))
            // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.GARANTIE_CEDEE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.PRIME')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.SMP')))
            // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.PART_FILIALE')))
            // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.VERSEMENT_AU_TRAITE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.IDPROCESSUS')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.IDPAYS')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.translate.instant('PLACEMENT_EN_FAC.TABLE.COLUMNS.ACTIONS'))
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
                ProcessusModel.findById(this.httpClient, value.IdProcessus).subscribe(response => {
                    value.Processus = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                PaysModel.findById(this.httpClient, value.IdPays).subscribe(response => {
                    value.Pays = response.body.Items[0];
                });
            } catch (e) {
            }
        });
    }

    ngOnChanges(changes) {
        // ObjectPath.set(this.getRequestGetter().getData(), 'ItemToSearch.DateSeance', this.DateSeance);
        this.getFormInfo();
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PLACEMENT_EN_FAC.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PLACEMENT_EN_FAC.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


