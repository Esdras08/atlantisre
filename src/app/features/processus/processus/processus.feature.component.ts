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
import {ProcessusModalFeatureComponent} from '../processus-modal/processus-modal.feature.component';
import {TranslateService} from '@ngx-translate/core';
import {SgiTableModal} from '../../../core/behaviors/sgi-table-modal';
import {AffaireModel} from '../../../core/models/affaire.model';
import {TypeProcessusModel} from '../../../core/models/type-processus.model';

@Component({
    selector: 'app-re-processus',
    templateUrl: './processus.feature.component.html',
})
export class ProcessusFeatureComponent extends SgiTableModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ProcessusModalFeatureComponent>,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialogRef, dialog, modalBuilder);
        this.dialogData = data;
        this.setContent(ProcessusModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('PROCESSUS.TABLE.COLUMNS.AFFAIRE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('PROCESSUS.TABLE.COLUMNS.TYPE_PROCESSUS')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('PROCESSUS.TABLE.COLUMNS.CATEGORIE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('PROCESSUS.TABLE.COLUMNS.ACTIONS'))
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
                AffaireModel.findById(this.httpClient, value.IdAffaire).subscribe(response => {
                    value.Affaire = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                TypeProcessusModel.findById(this.httpClient, value.IdTypeProcessus).subscribe(response => {
                    value.TypeProcessus = response.body.Items[0];
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
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROCESSUS.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROCESSUS.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


