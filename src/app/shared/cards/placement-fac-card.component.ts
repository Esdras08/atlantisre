import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-placement-fac-card',
    template: `
        <mat-card fxLayout="column" fxLayoutAlign="center center" class="w-100 h-100" >
            <h2 class="block-title my-3"><mat-icon class="mat-icon-lg primary-color">{{icon}}</mat-icon> {{title}}</h2>
            <p class="text-center secondary-text-color">
                &nbsp;<app-add-button (click)="onAdd?.emit()"></app-add-button>
                &nbsp;
                <app-show-list-button (click)="onList?.emit()"></app-show-list-button>
            </p>
        </mat-card>`
})
export class PlacementFacCardComponent {
    @Input('title') title = 'Titre';
    @Input('icon') icon = 'card_travel';
    @Output() onAdd = new EventEmitter<void>();
    @Output() onList = new EventEmitter<void>();
    constructor() {}
}
