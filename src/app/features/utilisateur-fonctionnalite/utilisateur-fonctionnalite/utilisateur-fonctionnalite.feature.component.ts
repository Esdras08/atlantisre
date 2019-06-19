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
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
// tslint:disable-next-line:max-line-length
import {UtilisateurFonctionnaliteModalFeatureComponent} from '../utilisateur-fonctionnalite-modal/utilisateur-fonctionnalite-modal.feature.component';
import {UtilisateurModel} from '../../../core/models/utilisateur.model';
import {FonctionnaliteModel} from '../../../core/models/fonctionnalite.model';

@Component({
    selector: 'app-re-utilisateur-fonctionnalite',
    templateUrl: './utilisateur-fonctionnalite.feature.component.html',
})
export class UtilisateurFonctionnaliteFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(UtilisateurFonctionnaliteModalFeatureComponent);

        this.getTableParams()
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR_FONCTIONNALITE.TABLE.COLUMNS.UTILISATEUR')))
            // tslint:disable-next-line:max-line-length
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR_FONCTIONNALITE.TABLE.COLUMNS.CODE_FONCTIONNALITE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR_FONCTIONNALITE.TABLE.COLUMNS.AUTORISE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('UTILISATEUR_FONCTIONNALITE.TABLE.COLUMNS.ACTIONS'))
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
                UtilisateurModel.findById(this.httpClient, value.IdUtilisateur).subscribe(response => {
                    value.Utilisateur = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                FonctionnaliteModel.findByCode(this.httpClient, value.Code).subscribe(response => {
                    value.Fonctionnalite = response.body.Items[0];
                });
            } catch (e) {
            }
        });
    }

    onSubmit() {
    }

    ngOnChanges(changes) {
        this.getFormInfo();
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR_FONCTIONNALITE.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR_FONCTIONNALITE.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


