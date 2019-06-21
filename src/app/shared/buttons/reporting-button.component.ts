import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-reporting-button',
    template: `<button mat-raised-button class="clv-bg-info-dark" type="button"><mat-icon>save</mat-icon>&nbsp;{{title}}
    </button>`
})
export class ReportingButtonComponent {
    @Input('title') title = 'Reporting';
}
