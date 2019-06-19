import {Component, Input} from '@angular/core';
import {CommonUtilities} from '../../core/utilities/common.utilities';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';

@Component({
    selector: 'app-button-report',
    template: `
        <button mat-button
                (click)="gotoReport(url)"
                [ngClass]="'clv-color-primary'">
            <mat-icon>local_printshop</mat-icon>&nbsp;<ng-content></ng-content></button>`
})
export class ButtonReportComponent {
    @Input('url') url: string;

    gotoReport(url) {
        if (!CommonUtilities.StringIsUndefinedOrNull(url)) {
            CommonUtilities.gotoHref(`${WebServicesUtilities.getReportRdlUrlBase()}${url}`);
        }
    }
}
