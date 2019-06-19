import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {PersonneModel} from '../../../core/models/personne.model';
import {TypepersonneComboComponent} from '../../../forms/typepersonne/typepersonne.combo.component';
import {CiviliteComboComponent} from '../../../forms/civilite/civilite.combo.component';
import {PieceIdentiteComboComponent} from '../../../forms/typepieceidentite/pieceIdentite.combo.component';
import {FormeJuridiqueComboComponent} from '../../../forms/formejuridique/formeJuridique.combo.component';
import {PaysComboComponent} from '../../../forms/pays/pays.combo.component';

// @dynamic
@Component({
    selector: 'app-personne-modal',
    templateUrl: './personne-modal.feature.component.html',
    providers: []
})
export class PersonneModalFeatureComponent extends SgiModalForm implements  OnInit, AfterViewInit {
    @ViewChild(TypepersonneComboComponent) typepersonne: TypepersonneComboComponent;
    @ViewChild(CiviliteComboComponent) civilite: CiviliteComboComponent;
    @ViewChild(PieceIdentiteComboComponent) piece: PieceIdentiteComboComponent;
    @ViewChild(FormeJuridiqueComboComponent) formeJuridique: FormeJuridiqueComboComponent;
    @ViewChild(PaysComboComponent) pays: PaysComboComponent;
    typepersonneIv: any;
    civiliteIv: any;
    formeJuridiqueIv: any;
    pieceIdentiteIv: any;
    paysIv: any;


    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<PersonneModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.typepersonneIv = data.item.IdTypePersonne;
            this.civiliteIv = data.item.Civilite.IdCivilite;
            this.formeJuridiqueIv = data.item.FormeJuridique.IdFormeJuridique;
            this.pieceIdentiteIv = data.item.IdTypePieceIdentite;
            this.paysIv = data.item.Pays.IdPays;

        } catch (e) {
        }
    }
    ngAfterViewInit(): void {
        this.addOptionInput(this.typepersonne);

    }
    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PERSONNE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new PersonneModel();
        this.setModel(model);
    }

}
