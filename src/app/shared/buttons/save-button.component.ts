import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-save-button',
    template: `<button mat-raised-button class="clv-bg-primary" type="button"><mat-icon>save_alt</mat-icon>&nbsp;{{title}}
    </button>`
})
export class SaveButtonComponent {
    @Input('title') title = 'Enregistrer';
}
