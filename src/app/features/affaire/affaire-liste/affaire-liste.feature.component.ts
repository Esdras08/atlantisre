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
import {AffaireModalFeatureComponent} from '../affaire-modal/affaire-modal.feature.component';
import {SgiTableModal} from '../../../core/behaviors/sgi-table-modal';
import {ProcessusModalFeatureComponent} from '../../processus/processus-modal/processus-modal.feature.component';
import {StatutAffaireModel} from '../../../core/models/statut-affaire.model';
import {BrancheModel} from '../../../core/models/branche.model';
import {FilialeModel} from '../../../core/models/filiale.model';
import {AssureModel} from '../../../core/models/assure.model';
import {SgiTableShowModal} from '../../../core/behaviors/sgi-table-show-modal';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-re-affaire-liste',
    templateUrl: './affaire-liste.feature.component.html',
})
export class AffaireListeFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);
        this.setContent(AffaireModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.NUMERO_ORDRE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.NUMERO_POLICE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.CAPITAUX_ASSURE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.ACTIVITE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.STATUT_AFFAIRE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.BRANCHE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.FILIALE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.ASSURE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('AFFAIRE.TABLE.COLUMNS.ACTIONS'))
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
        // ObjectPath.set(this.getRequestGetter().getData(), 'ItemToSearch.DateSeance', this.DateSeance);
        this.getFormInfo();
    }

    afterGetFormInfo(formInfo: any): any {
        super.afterGetFormInfo(formInfo);
        formInfo.Items.map((value) => {
            try {
                StatutAffaireModel.findById(this.httpClient, value.IdStatutAffaire).subscribe(response => {
                    value.StatutAffaire = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                BrancheModel.findById(this.httpClient, value.IdBranche).subscribe(response => {
                    value.Branche = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                FilialeModel.findById(this.httpClient, value.IdFiliale).subscribe(response => {
                    value.Filiale = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                AssureModel.findById(this.httpClient, value.IdAssure).subscribe(response => {
                    value.Assure = response.body.Items[0];
                });
            } catch (e) {
            }
        });
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.AFFAIRE.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.AFFAIRE.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


