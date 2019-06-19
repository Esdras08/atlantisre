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
import {ReassureurModalFeatureComponent} from '../reassureur-modal/reassureur-modal.feature.component';
import {PaysModel} from '../../../core/models/pays.model';

@Component({
    selector: 'app-re-reassureur',
    templateUrl: './reassureur.feature.component.html',
})
export class ReassureurFeatureComponent extends SgiTableShowModal implements OnChanges {

    constructor(public httpClient: HttpClient,
                public toast: MessageShowerToastImpl,
                public alertMessage: MessageShowerAlertImpl,
                public snakebar: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder,
                public translateService: TranslateService) {
        super(httpClient, toast, alertMessage, snakebar, dialog, modalBuilder);

        this.setContent(ReassureurModalFeatureComponent);

        this.getTableParams()
        // .addColumn(new ClvTableColumnField().setTitle(''))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('REASSUREUR.TABLE.COLUMNS.NOM')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('REASSUREUR.TABLE.COLUMNS.CODE')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('REASSUREUR.TABLE.COLUMNS.PAYS')))
            .addColumn(new ClvTableColumnField().setTitle(translateService.instant('REASSUREUR.TABLE.COLUMNS.ACTIONS'))
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
                PaysModel.findById(this.httpClient, value.IdPays).subscribe(response => {
                    value.Pays = response.body.Items[0];
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
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.REASSUREUR.GET))
            .setMethod(RequestMethod.POST)
            .setData({});

        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.REASSUREUR.SET))
            .setMethod(RequestMethod.POST).setData({});
    }
}


