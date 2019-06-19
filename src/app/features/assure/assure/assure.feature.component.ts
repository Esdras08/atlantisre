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
import {AssureModalFeatureComponent} from '../assure-modal/assure-modal.feature.component';
import {PersonneModel} from '../../../core/models/personne.model';
import {FilialeModel} from '../../../core/models/filiale.model';

@Component({
    selector: 'app-re-assure',
    templateUrl: './assure.feature.component.html',
})
export class AssureFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(AssureModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('ASSURE.TABLE.COLUMNS.NUMERO_ASSURE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('ASSURE.TABLE.COLUMNS.PERSONNE')))
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

    afterGetFormInfo(formInfo: any): any {
        super.afterGetFormInfo(formInfo);
        formInfo.Items.map((value) => {
            try {
                PersonneModel.findById(this.httpClient, value.IdPersonne).subscribe(response => {
                    value.Personne = response.body.Items[0];
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


