import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {ProcessusModel} from '../../../core/models/processus.model';
import {AffaireAutocompleteComponent} from '../../../forms/affaire/affaire.autocomplete.component';
import {TypeProcessusAutocompleteComponent} from '../../../forms/type-processus/type-processus.autocomplete.component';

// @dynamic
@Component({
    selector: 'app-processus-modal',
    templateUrl: './processus-modal.feature.component.html',
    providers: []
})
export class ProcessusModalFeatureComponent extends SgiModalForm implements  OnInit, AfterViewInit {
    @ViewChild(AffaireAutocompleteComponent) affaire: AffaireAutocompleteComponent;
    @ViewChild(TypeProcessusAutocompleteComponent) typeProcessus: TypeProcessusAutocompleteComponent;
    affaireIv = '';
    typeProcessusIv = '';
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ProcessusModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        console.log(data.item);
        try {
            this.affaireIv = data.item.Affaire.NumeroOrdre;
        } catch (e) {
        }
        try {
            this.typeProcessusIv = data.item.TypeProcessus.Libelle;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.affaire);
        this.addOptionInput(this.typeProcessus);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROCESSUS.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new ProcessusModel();
        this.setModel(model);
    }

}
