import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl} from 'clv-angular-boot';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {CommonUtilities} from '../utilities/common.utilities';
import {SgiTableShow} from './sgi-table-show';
import {ModalBuilder} from '../../shared/modal/modal-builder';

export abstract class SgiTableShowModal extends SgiTableShow {
    private content: any;
    constructor(public httpRequest: HttpClient,
                public toasts: MessageShowerToastImpl,
                public alerts: MessageShowerAlertImpl,
                public snakeBars: MessageShowerSnakeBarImpl,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder) {
        super(httpRequest, toasts, alerts, snakeBars);
    }

    setContent(component: any) {
        this.content = component;
    }

    launchmodal(e?: any, size: string = '30%') {
        const data: any = {};
        if (!CommonUtilities.IsUndefinedOrNull(e)) {
            data.item = {...e};
        }
        const dialogRef = this.modalBuilder.launch(this.dialog, this.content, data, size);

        dialogRef.afterClosed().subscribe((response: any) => {
            this.getFormInfo();
        });
    }
}
