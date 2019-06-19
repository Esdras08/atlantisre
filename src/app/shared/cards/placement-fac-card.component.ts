import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-placement-fac-card',
    template: `
        <mat-card fxLayout="column" fxLayoutAlign="center center" class="w-100 h-100" >
            <h2 class="block-title my-3"><mat-icon class="mat-icon-lg accent-color">{{icon}}</mat-icon> {{title}}</h2>
            <p class="text-center secondary-text-color">
                <button mat-raised-button [ngClass]="addButtonClass" (click)="onAdd?.emit()">
                    <mat-icon>{{addButtonIcon}}</mat-icon>
                    <span> {{addButtonLabel}}</span>
                </button>
                &nbsp;
                &nbsp;
                <button mat-raised-button [ngClass]="listButtonClass" (click)="onList?.emit()">
                    <mat-icon>{{listButtonIcon}}</mat-icon>
                    <span> {{listButtonLabel}}</span>
                </button>
            </p>
        </mat-card>`
})
export class PlacementFacCardComponent {
    @Input('title') title = 'Titre';
    @Input('icon') icon = 'card_travel';
    @Input('addButtonLabel') addButtonLabel = this.translateService.instant('APPS.CARDS.PLACEMENT_EN_FAC.BUTTON.ADD');
    @Input('addButtonIcon') addButtonIcon = 'add';
    @Input('addButtonClass') addButtonClass = 'gradient-blue';
    @Input('listButtonLabel') listButtonLabel = this.translateService.instant('APPS.CARDS.PLACEMENT_EN_FAC.BUTTON.LIST');
    @Input('listButtonIcon') listButtonIcon = 'remove_red_eye';
    @Input('listButtonClass') listButtonClass = 'gradient-amber';
    @Output() onAdd = new EventEmitter<void>();
    @Output() onList = new EventEmitter<void>();
    constructor(public translateService: TranslateService) {}
}