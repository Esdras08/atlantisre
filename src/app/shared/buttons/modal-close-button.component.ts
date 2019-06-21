import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-modal-close-button',
    template: `<button mat-raised-button class="bg-primary" type="button">
        {{title}}
    </button>`
})
export class ModalCloseButtonComponent {
    @Input('title') title = 'Fermer';
}
