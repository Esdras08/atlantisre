import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SgiMiniForm} from '../../../core/behaviors/sgi-mini-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {UtilisateurModel} from '../../../core/models/utilisateur.model';
import {ReassureurAutocompleteComponent} from '../../../forms/reassureur/reassureur.autocomplete.component';
import {CommonUtilities} from '../../../core/utilities/common.utilities';
import {REPORT_NAMES} from '../../../core/utilities/report-names.utilities';

@Component({
    selector: 'app-schema-placement-add',
    templateUrl: './schema-placement-add.component.html'
})
export class SchemaPlacementAddComponent extends SgiMiniForm implements AfterViewInit {
    @ViewChild(ReassureurAutocompleteComponent) reassureur: ReassureurAutocompleteComponent;
    reassureurIv = '';
    constructor(
        public httpClient: HttpClient,
        public toastMessage: MessageShowerToastImpl,
        public alertMessage: MessageShowerAlertImpl,
        public snakeBarMessage: MessageShowerSnakeBarImpl,
    ) {
        super(httpClient, toastMessage, alertMessage, snakeBarMessage);
        try {
            this.reassureurIv = this.data.item.IdProfil;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.reassureur);
    }

    beforeAll(): void {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.SCHEMA_PLACEMENT_EN_FAC.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new UtilisateurModel();
        this.modelInstance = new UtilisateurModel();
        this.setModel(model);
    }

    displayFicheplacement() {
        CommonUtilities.displayReport(REPORT_NAMES.FICHE_PLACEMENT, 'IdDemande=1');
    }
}
