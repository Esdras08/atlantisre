import {MessageShowerAlertImpl, MessageShowerSnakeBarImpl, MessageShowerToastImpl} from 'clv-angular-boot';
import {MatDialog, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ModalBuilder} from '../../shared/modal/modal-builder';
import {SgiTableShowModal} from './sgi-table-show-modal';

export abstract class SgiTableModal extends SgiTableShowModal {
    private _dialogData: any;

    constructor(public httpRequest: HttpClient,
                public toasts: MessageShowerToastImpl,
                public alerts: MessageShowerAlertImpl,
                public snakeBars: MessageShowerSnakeBarImpl,
                public dialogRef: MatDialogRef<any>,
                public dialog: MatDialog,
                public modalBuilder: ModalBuilder) {
        super(httpRequest, toasts, alerts, snakeBars, dialog, modalBuilder);
    }

    get dialogData(): any {
        return this._dialogData;
    }

    set dialogData(value: any) {
        this._dialogData = value;
        // try {
        //     this.newItem = this._dialogData.item;
        // } catch (e) {
        // }
        // if (!this.isNewItem && !CommonUtilities.IsUndefinedOrNull(this.newItem)) {
        //     this.getFormInfo();
        // } else {
        //     // this.newItem
        // }
    }


    closeModal(data?) {
        this.dialogRef.close(data);
    }
}
