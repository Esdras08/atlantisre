import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {BrancheComboComponent} from '../../../forms/branche/branche.combo.component';
import {FilialeComboComponent} from '../../../forms/filiale/filiale.combo.component';
import {AffaireModel} from '../../../core/models/affaire.model';
import {StatutAffaireComboComponent} from '../../../forms/statut-affaire/statut-affaire.combo.component';
import {AssureComboComponent} from '../../../forms/assure/assure.combo.component';

// @dynamic
@Component({
    selector: 'app-affaire-modal',
    templateUrl: './affaire-modal.feature.component.html',
    providers: []
})
export class AffaireModalFeatureComponent extends SgiModalForm implements OnInit, AfterViewInit {
    @ViewChild(StatutAffaireComboComponent) statutAffaire: StatutAffaireComboComponent;
    @ViewChild(BrancheComboComponent) branche: BrancheComboComponent;
    @ViewChild(FilialeComboComponent) filiale: FilialeComboComponent;
    @ViewChild(AssureComboComponent) assure: AssureComboComponent;
    statuAffaireIv: any;
    brancheIv: any;
    filialeIv: any;
    assureIv: any;

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<AffaireModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.statuAffaireIv = data.item.IdStatutAffaire;
            this.brancheIv = data.item.IdBranche;
            this.filialeIv = data.item.IdFiliale;
            this.assureIv = data.item.IdAssure;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.statutAffaire);
        this.addOptionInput(this.branche);
        this.addOptionInput(this.filiale);
        this.addOptionInput(this.assure);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.AFFAIRE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new AffaireModel();
        this.setModel(model);
    }

}
