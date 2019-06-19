import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {SgiModalForm} from '../../../core/behaviors/sgi-modal-form';
import {HttpClient} from '@angular/common/http';
import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl, RequestMethod} from 'clv-angular-boot';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {TranslateService} from '@ngx-translate/core';
import {PlacementEnFacModel} from '../../../core/models/placement-en-fac.model';
import {FormControl} from '@angular/forms';
import {ProcessusComboComponent} from '../../../forms/processus/processus.combo.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {PaysComboComponent} from '../../../forms/pays/pays.combo.component';

// @dynamic
@Component({
    selector: 'app-placement-en-fac-modal',
    templateUrl: './placement-en-fac-modal.feature.component.html',
    providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    ]
})
export class PlacementEnFacModalFeatureComponent extends SgiModalForm implements OnInit, AfterViewInit {
    @ViewChild(ProcessusComboComponent) processus: ProcessusComboComponent;
    @ViewChild(PaysComboComponent) pays: PaysComboComponent;
    ProcessusIv = '';
    PaysIv = '';

    VersementAuTraite = new FormControl(false);

    constructor(public httpRequest: HttpClient,
                public toast: MessageShowerToastImpl,
                public alert: MessageShowerAlertImpl,
                public snakeBar: MessageShowerSnakeBarImpl,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private _adapter: DateAdapter<any>,
                public dialogRef: MatDialogRef<PlacementEnFacModalFeatureComponent>,
                public translateService: TranslateService) {
        super(httpRequest, toast, alert, snakeBar, dialogRef);
        this.dialogData = data;
        try {
            this.ProcessusIv = data.item.Processus.IdProcessus;
        } catch (e) {
        }
        try {
            this.PaysIv = data.item.Pays.IdPays;
        } catch (e) {
        }
    }

    ngAfterViewInit(): void {
        this.addOptionInput(this.processus);
    }

    beforeAll() {
        this.getRequestSetter()
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PLACEMENT_EN_FAC.SET))
            .setMethod(RequestMethod.POST).setData({});
        const model = new PlacementEnFacModel();
        this.setModel(model);
    }

}
