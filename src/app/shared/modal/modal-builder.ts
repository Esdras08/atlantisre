import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PARAMETRES} from '../../core/services/parametres';

@Injectable({providedIn: 'root'})
export class ModalBuilder {
    public launch(dialog: MatDialog, component: any, data: any = null, size: string = PARAMETRES.BREAKPOINT.UP.MD): MatDialogRef<any, any> {
        return dialog.open(component, {
            width: size,
            maxHeight: '90%',
            position: {top: '20px'},
            disableClose: true,
            panelClass: 'custom-dialog-container',
            data: data
        });
    }
}
