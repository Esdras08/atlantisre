import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-cancel-button',
    template: `<button mat-raised-button type="button" class="bg-dark">
        {{title}}
    </button>`
})
export class CancelButtonComponent {
    @Input('title') title = 'Annuler';
}
