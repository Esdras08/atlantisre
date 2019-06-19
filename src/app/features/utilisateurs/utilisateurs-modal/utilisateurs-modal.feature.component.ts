import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {
    MessageShowerAlertImpl,
    MessageShowerSnakeBarImpl,
    MessageShowerToastImpl,
    Request as RequestRe,
    RequestMethod
} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {UtilisateurModel} from '../../../core/models/utilisateur.model';
import {ProfilComboComponent} from '../../../forms/profil/profil.combo.component';
import {StructureAutocompleteComponent} from '../../../forms/structure/structure.autocomplete.component';
import {ActifComboComponent} from '../../../forms/actif/actif.combo.component';
import {IsConnectedComboComponent} from '../../../forms/is-connected/is-connected.combo.component';
import {FormControl} from '@angular/forms';
import {PARAMETRES} from '../../../core/services/parametres';

// @dynamic
@Component({
    selector: 'app-utilisateurs-modal',
    templateUrl: './utilisateurs-modal.feature.component.html',
    providers: []
})
export class UtilisateursModalFeatureComponent extends SgiModalForm implements OnInit, AfterViewInit {
    @ViewChild(ProfilComboComponent) profil: ProfilComboComponent;
    @ViewChild(ActifComboComponent) actif: ActifComboComponent;
    @ViewChild(IsConnectedComboComponent) isConnected: IsConnectedComboComponent;
    @ViewChild(StructureAutocompleteComponent) structure: StructureAutocompleteComponent;
    profilIv: any;
    actifIv: any;
    isConnectedIv: any;
    structureIv: any = '';
    repassword = new FormControl();
    definePassword = new FormControl(true);
    PARAMS = PARAMETRES;

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<UtilisateursModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.profilIv = data.item.IdProfil;
            this.structureIv = data.item.Structure.RaisonSocialeStructure;
            this.actifIv = data.item.Actif;
            this.isConnectedIv = data.item.IsConnected;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.profil);
        this.addOptionInput(this.structure);
        this.addOptionInput(this.actif);
        this.addOptionInput(this.isConnected);
    }

    canSend(request: RequestRe<any>): boolean {
        return (this.definePassword.value) ? super.canSend(request) && (this.getFormInstance().value.Password === this.repassword.value) :
            super.canSend(request);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.UTILISATEUR.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new UtilisateurModel();
        this.setModel(model);
    }

}
