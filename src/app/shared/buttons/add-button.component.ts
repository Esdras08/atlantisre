import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-add-button',
    template: `<button mat-raised-button="" type="button" ngClass="clv-bg-success"><mat-icon>control_point</mat-icon>&nbsp;
        {{title}}</button>`
})
export class AddButtonComponent {
    @Input('title') title = 'Ajouter';
}
