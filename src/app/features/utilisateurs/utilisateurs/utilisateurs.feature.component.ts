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
import {UtilisateursModalFeatureComponent} from '../utilisateurs-modal/utilisateurs-modal.feature.component';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {ProfilModel} from '../../../core/models/profil.model';
import {StructureModel} from '../../../core/models/structure.model';

@Component({
    selector: 'app-re-utilisateurs',
    templateUrl: './utilisateurs.feature.component.html',
})
export class UtilisateursFeatureComponent extends SgiTableShowModal implements OnChanges {
    modalSize = '70%';

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(UtilisateursModalFeatureComponent);

        this.getTableParams()
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.NOM_PRENOM')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.EMAIL')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.TELEPHONE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.ACTIF')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.IS_CONNECTED')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.PROFIL')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.STRUCTURE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR.TABLE.COLUMNS.ACTIONS'))
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
                ProfilModel.findById(this.httpClient, value.IdProfil).subscribe(response => {
                    value.Profil = response.body.Items[0];
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
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


