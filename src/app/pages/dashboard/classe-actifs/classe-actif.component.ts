import {Component} from '@angular/core';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, ModelImpl, RequestMethod} from 'clv-angular-boot';
import {SgiTableShow} from '../../../core/behaviors/sgi-table-show';
import {HttpClient} from '@angular/common/http';
import {ClvTableColumnField} from 'clv-advanced-table';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {Security} from '../../../core/utilities/security.utilities';
import * as ObjectPath from 'object-path';
import {PARAMETRES} from '../../../core/services/parametres';

@Component({
    selector: 'app-dashboard-class-actif',
    templateUrl: 'classe-actif.component.html'
})
export class ClasseActifComponent extends SgiTableShow {
    constructor(public httpRequest: HttpClient,
        public toasts: MessageShowerToastImpl,
        public alerts: MessageShowerAlertImpl,
        public snakeBars: MessageShowerSnakeBarImpl) {
        super(httpRequest, toasts, alerts, snakeBars);
    }
    beforeAll() {
        this.setModel(new ModelImpl());

        this.getTableParams()
            .addColumn(new ClvTableColumnField().setTitle('Classe d\'Actifs').setName('Code'))
            .addColumn(new ClvTableColumnField().setTitle('Valeur (F CFA)').setName('LibelleObligation'))
            .addColumn(new ClvTableColumnField().setTitle('%').setSize('20%').setName('Action'))
            .setTableClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.TABLE'))
            .setRowClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.ROW'))
            .setFooterClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.FOOTER'))
            .setTrImpairClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.TR_IMPAIR'))
            .setTrPairClass(ObjectPath.get(PARAMETRES, 'TABLES.CLASS.TR_PAIR'));

        this.getRequestGetter().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl('SgiCtrl', 'GetRepartitionPortefeuille'))
            .setData({
                ItemToSearch: {
                    DateSeance: '2018-09-20T00:00:00',
                    NumeroCompte: Security.getCurrentUser()['NumeroCompte']
                }
            });
        this.getRequestSetter().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl('SgiCtrl', 'GetMarcheBoursiersByCriterias'));
    }
}
