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
import {PersonneModalFeatureComponent} from '../personne-modal/personne-modal.feature.component';
import {TypepersonneModel} from '../../../core/models/typepersonne.model';
import {CiviliteModel} from '../../../core/models/civilite.model';
import {PieceIdentiteModel} from '../../../core/models/pieceIdentite.model';
import {FormeJuridiqueModel} from '../../../core/models/formeJuridique.model';
import {PaysModel} from '../../../core/models/pays.model';
import {PlacementEnFacFeatureComponent} from '../../placement-en-fac/placement-en-fac/placement-en-fac.feature.component';
import {PlacementEnFacModalFeatureComponent} from '../../placement-en-fac/placement-en-fac-modal/placement-en-fac-modal.feature.component';
import {PersonneMoraleModalFeatureComponent} from '../personne-modal/personne-morale-modal.feature.component';
import {FilialeModel} from '../../../core/models/filiale.model';
import {CommonUtilities} from '../../../core/utilities/common.utilities';

@Component({
    selector: 'app-re-personne',
    templateUrl: './personne.feature.component.html',
})
export class PersonneFeatureComponent extends SgiTableShowModal implements OnChanges {
    modalSize = '70%';

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(PersonneModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('ASSURE.TABLE.COLUMNS.TYPE_PERSONNE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('ASSURE.TABLE.COLUMNS.NUMERO_ASSURE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('ASSURE.TABLE.COLUMNS.FILIALE')))

            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('ASSURE.TABLE.COLUMNS.ACTIONS'))
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

/*    launchmodal(e?: any, size: string = '30%') {
        const data: any = {};
        if (!CommonUtilities.IsUndefinedOrNull(e)) {
            data.item = {...e};
        }
        const dialogRef = this.modalBuilder.launch(this.dialog, this.content, data, size);

        dialogRef.afterClosed().subscribe((response: any) => {
            this.getFormInfo();
        });
    }*/
    launchmodalAssure(button, data) {
        // const data: any = {};

        if (button === 1) {
            this.setContent(PersonneModalFeatureComponent);
            this.launchmodal(data, '70%');
        } else {
            this.setContent(PersonneMoraleModalFeatureComponent);
            this.launchmodal(data, '70%');

        }
    }

    afterGetFormInfo(formInfo: any): any {
        super.afterGetFormInfo(formInfo);
        formInfo.Items.map((value) => {
            try {
                TypepersonneModel.findById(this.httpClient, value.IdTypePersonne).subscribe(response => {
                    value.TypePersonne = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                CiviliteModel.findById(this.httpClient, value.IdCivilite).subscribe(response => {
                    value.Civilite = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                PieceIdentiteModel.findById(this.httpClient, value.IdTypePieceIdentite).subscribe(response => {
                    value.PieceIdentite = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                FormeJuridiqueModel.findById(this.httpClient, value.IdFormeJuridique).subscribe(response => {
                    value.FormeJuridique = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                PaysModel.findById(this.httpClient, value.IdPays).subscribe(response => {
                    value.Pays = response.body.Items[0];
                });
            } catch (e) {
            }
            try {
                FilialeModel.findById(this.httpClient, value.IdFiliale).subscribe(response => {
                    value.Filiale = response.body.Items[0];
                });
            } catch (e) {
            }
        });
    }

    beforeAll() {
        this.setModel(new ModelImpl());
        this.getRequestGetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ASSURE.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.ASSURE.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


