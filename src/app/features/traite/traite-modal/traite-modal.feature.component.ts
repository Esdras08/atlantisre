import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../core/services/api-services.params';
import {TraiteModel} from '../../../core/models/traite.model';
import {BrancheComboComponent} from '../../../forms/branche/branche.combo.component';
import {ReassureurAutocompleteComponent} from '../../../forms/reassureur/reassureur.autocomplete.component';
import {StructureAutocompleteComponent} from '../../../forms/structure/structure.autocomplete.component';

// @dynamic
@Component({
    selector: 'app-traite-modal',
    templateUrl: './traite-modal.component.html',
    providers: []
})
export class TraiteModalFeatureComponent extends SgiModalForm implements OnInit, AfterViewInit {
    @ViewChild(BrancheComboComponent) branche: BrancheComboComponent;
    @ViewChild(ReassureurAutocompleteComponent) reassureur: ReassureurAutocompleteComponent;
    @ViewChild(StructureAutocompleteComponent) structure: StructureAutocompleteComponent;
    brancheIv: any;
    reassureurIv: any = '';
    structureIv: any = '';

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<TraiteModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.brancheIv = data.item.IdBranche;
            this.reassureurIv = data.item.Reassureur.NomReassureur;
            this.structureIv = data.item.Structure.RaisonSocialeStructure;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.branche);
        this.addOptionInput(this.reassureur);
        this.addOptionInput(this.structure);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.TRAITE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new TraiteModel();
        this.setModel(model);
    }

}
