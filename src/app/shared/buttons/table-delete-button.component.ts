import {Component} from '@angular/core';

@Component({
    selector: 'app-table-delete-button',
    template: `
        <button mat-icon-button color="warn" matTooltip="Supprimer l'element"
                type="button">
            <mat-icon>delete</mat-icon>
        </button>`
})
export class TableDeleteButtonComponent {
}
