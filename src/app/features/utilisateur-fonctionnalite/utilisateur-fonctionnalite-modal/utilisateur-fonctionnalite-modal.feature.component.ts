import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {UtilisateurFonctionnaliteModel} from '../../../core/models/utilisateur-fonctionnalite.model';
import {UtilisateurAutocompleteComponent} from '../../../forms/utilisateur/utilisateur.autocomplete.component';
import {FonctionnaliteComboComponent} from '../../../forms/fonctionnalite/fonctionnalite.combo.component';

// @dynamic
@Component({
    selector: 'app-utilisateur-fonctionnalite-modal',
    templateUrl: './utilisateur-fonctionnalite-modal.feature.component.html',
    providers: []
})
export class UtilisateurFonctionnaliteModalFeatureComponent extends SgiModalForm implements AfterViewInit {
    @ViewChild(UtilisateurAutocompleteComponent) utilisateur: UtilisateurAutocompleteComponent;
    @ViewChild(FonctionnaliteComboComponent) fonctionnalite: FonctionnaliteComboComponent;
    utilisateurIv: any = '';
    fonctionnaliteIv: any = '';

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<UtilisateurFonctionnaliteModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.utilisateurIv = data.item.Utilisateur.Nom;
            this.fonctionnaliteIv = data.item.Fonctionnalite.Code;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.utilisateur);
        this.addOptionInput(this.fonctionnalite);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR_FONCTIONNALITE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new UtilisateurFonctionnaliteModel();
        this.setModel(model);
    }

}

