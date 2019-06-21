import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {StructureModel} from '../../../core/models/structure.model';
import {DeviseComboComponent} from '../../../forms/devise/devise.combo.component';
import {PaysAutocompleteComponent} from '../../../forms/pays/pays.autocomplete.component';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../core/services/api-services.params';

// @dynamic
@Component({
    selector: 'app-structure-modal',
    templateUrl: './structure-modal.component.html',
    providers: []
})
export class StructureModalFeatureComponent extends SgiModalForm implements  OnInit, AfterViewInit {
    @ViewChild(DeviseComboComponent) devise: DeviseComboComponent;
    @ViewChild(PaysAutocompleteComponent) pays: PaysAutocompleteComponent;
    deviseIv: any;
    paysIv: any = '';
    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<StructureModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        this.numberFields = ['CapitalSocial'];
        try {
            this.deviseIv = data.item.IdDevise;
            this.paysIv = data.item.Pay.Libelle;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.devise);
        this.addOptionInput(this.pays);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.STRUCTURE.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new StructureModel();
        this.setModel(model);
    }
}
